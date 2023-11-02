import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import houseServiceAPI from '../services/housesService';

const Home = () => {
  const housesData = useSelector((state) => state.houses.houses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(houseServiceAPI.fetchHouses());
  }, [dispatch]);

  const houseData = housesData.map((data) => (
    <div key={data.id}>
      <img src={`./images/${data.house_image}`} alt={data.house_name} />
      <p>{data.house_name}</p>

      <p>
        Location:
        {data.location}
      </p>
    </div>
  ));

  return (
    <div>
      <h1>Welcome to House Reservations</h1>
      {houseData}
    </div>
  );
};

export default Home;
