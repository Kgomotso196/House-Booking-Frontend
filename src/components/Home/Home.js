import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import houseServiceAPI from '../../services/housesService';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.houses.houses);
  const isLoading = useSelector((state) => state.houses.isLoading);
  const error = useSelector((state) => state.houses.error);

  useEffect(() => {
    dispatch(houseServiceAPI.fetchHouses());
  }, [dispatch]);

  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    setScrollPosition((prevPosition) => prevPosition + 200);
  };

  const scrollRight = () => {
    setScrollPosition((prevPosition) => prevPosition - 200);
  };

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
    <div className="home-page">
      <p className="welcome-msg">W E L C O ME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;T O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;H O U S E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R E S E R V A T I O N S</p>
      <button type="button" className="scroll-btn scroll-left" onClick={scrollLeft}>
        &#9665;
      </button>
      <div className="house-list" style={{ overflowX: 'auto', whiteSpace: 'nowrap', marginLeft: `${scrollPosition}px` }}>
        {simplifiedHouses.map((house) => (
          <div className="house-card" key={house.id}>
            <div className="circular-container">
              <img src={house.house_image} alt={house.house_name} />
            </div>
            <p className="house-name">{house.house_name}</p>
            <button type="button" className="details-button">See Details</button>
            <div className="social-group">
              <span className="social-icon"><i className="fa-brands fa-x-twitter" /></span>
              <span className="social-icon"><i className="fa-brands fa-linkedin-in" /></span>
              <span className="social-icon"><i className="fa-brands fa-github" /></span>
            </div>
          </div>
        ))}
      </div>
      <button type="button" className="scroll-btn scroll-right" onClick={scrollRight}>
        &#9655;
      </button>
    </div>
  );
};

export default Home;
