import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import houseServiceAPI from '../../services/housesService';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.houses.houses);
  const isLoading = useSelector((state) => state.houses.isLoading);
  const error = useSelector((state) => state.houses.error);

  const containerRef = useRef(null);

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

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 100;
    }
  };

  return (
    <div className="home-page">
      <h1>Welcome To House Reservations</h1>
      <button type="button" className="scroll-btn scroll-left" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="house-list" ref={containerRef}>
        {simplifiedHouses.map((house) => (
          <div className="house-card" key={house.id}>
            <div className="circular-container">
              <img src={house.house_image} alt={house.house_name} />
            </div>
            <p className="house-name">{house.house_name}</p>
            <button type="button" className="details-button">See Details</button>
          </div>
        ))}
      </div>
      <button type="button" className="scroll-btn scroll-right" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default Home;
