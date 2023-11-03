import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import houseServiceAPI from '../../services/housesService';

const Home = () => {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.houses.houses);
  const isLoading = useSelector((state) => state.houses.isLoading);
  const error = useSelector((state) => state.houses.error);

  useEffect(() => {
    dispatch(houseServiceAPI.fetchHouses());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error fetching houses:
        {error}
      </div>
    );
  }

  const simplifiedHouses = houses.map((house, index) => ({
    house_name: house.house_name,
    house_image: house.house_image,
    id: house.id || index,
  }));

  return (
    <div className="home">
      <h1>Welcome To House Reservations</h1>
      <div className="house-list">
        {simplifiedHouses.map((house) => (
          <div className="house-card" key={house.id}>
            <img src={house.house_image} alt={house.house_name} />
            <p>{house.house_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
