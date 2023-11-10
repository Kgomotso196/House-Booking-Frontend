import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import houseServiceAPI from '../../services/housesService';
import HouseDetails from '../HouseDetails/HouseDetails';
import './Home.css';

// eslint-disable
function Home() {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.houses.houses);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const isLoading = useSelector((state) => state.houses.isLoading);
  const error = useSelector((state) => state.houses.error);

  useEffect(() => {
    dispatch(houseServiceAPI.fetchHouses());
  }, [dispatch]);

  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    if (scrollPosition < 0) {
      setScrollPosition((prevPosition) => prevPosition + 300);
    }
  };
  const simplifiedHouses = houses.map((house, index) => ({
    house_name: house.house_name,
    house_image: house.house_image,
    id: house.id || index,
  }));

  const scrollRight = () => {
    const maxScroll = (simplifiedHouses.length) * 200;
    if (scrollPosition > -maxScroll) {
      setScrollPosition((prevPosition) => prevPosition - 300);
    }
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

  const handleSeeDetails = (house) => {
    setSelectedHouse(house);
  };

  return (
    <div className="home-page">
      <p className="welcome-msg">WELCOME TO BOOK HOUSE</p>
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
            <Link to={`/house-details/${house.id}`}>
              <button type="button" className="details-button" onClick={() => handleSeeDetails(house)}>See Details</button>
            </Link>
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
      {selectedHouse && <HouseDetails house={selectedHouse} />}
    </div>
  );
}

export default Home;
