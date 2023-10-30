import React, { useState } from 'react';

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
    <div>
      <h1>Delete House</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={houseId} onChange={handleChange} placeholder="House ID" />
        <button type="submit">Delete House</button>
      </form>
    </div>
  );
};

export default DeleteHouse;
