import React, { useState } from 'react';

const AddReservation = () => {
  const [formData, setFormData] = useState({
    checking_date: '',
    checkout_date: '',
    city: '',
    // Add other fields as per your reservation model
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://3001/api/v1/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Redirecting user
      } else {
        // Handling error
      }
    } catch (error) {
      // Handling error
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1>Add Reservation</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="checking_date" value={formData.checking_date} onChange={handleChange} placeholder="Checking Date" />
        {/* Reservation details will come here */}
        <button type="submit">Add Reservation</button>
      </form>
    </div>
  );
};

export default AddReservation;
