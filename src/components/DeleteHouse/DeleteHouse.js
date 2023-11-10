import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import houseServiceAPI from '../../services/housesService';
import './DeleteHouse.css';

const DeleteHouse = () => {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.houses.houses);

  useEffect(() => {
    dispatch(houseServiceAPI.fetchHouses());
  }, [dispatch]);

  const handleDelete = (houseId) => {
    dispatch(houseServiceAPI.deleteHouse(houseId));
  };

  return (
    <div className="deleteHouseContainer">
      <div className="headingContainer">
        <h1 className="del-text">DELETE&nbsp;&nbsp;A&nbsp;&nbsp;HOUSE</h1>
      </div>
      <div className="deleteHouseWrapper">
        {houses.map((house) => (
          <div className="deleteHouse" key={house.id}>
            <div>
              {' '}
              {house.house_name}
            </div>
            <div>
              {' '}
              {house.description}
            </div>
            <div>
              {' '}
              <img src={house.house_image} alt="house" className="houseImage" />
            </div>
            <div>
              {' '}
              {house.location}
            </div>
            <button type="button" className="deleteButton" onClick={() => handleDelete(house.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteHouse;
