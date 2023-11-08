import React, { useState } from 'react';
import houseServiceAPI from '../../services/housesService';
import './DeleteHouse.css';

const DeleteHouse = () => {
  const [houseId, setHouseId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://3001/api/v1/houses/${houseId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        // Handling error
      }
    } catch (error) {
      // Handling error
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setHouseId(value);
  };

  return (
    <div className="delete-house">
      <h1 className="del-text">DELETE&nbsp;&nbsp;A&nbsp;&nbsp;HOUSE</h1>
      <form onSubmit={handleSubmit}>
        <input className="form-txt" type="text" value={houseId} onChange={handleChange} placeholder="Type House ID" />
        <button type="submit" className="del-btn">DELETE HOUSE</button>
      </form>
    </div>
  );
};

export default DeleteHouse;
