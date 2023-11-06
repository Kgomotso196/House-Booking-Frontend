import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import reservationServiceAPI from '../services/reservationService';

const AddReservation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    checking_date: '',
    checkout_date: '',
    city: '',
    house_price: '',
    // Add other fields as per your reservation model
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedReservationData = {
      checking_date: formData.checking_date,
      checkout_date: formData.checkout_date,
      city: formData.city,
      user_id: 1, // Include the user_id here
      house_id: 1,
      house_price: formData.house_price,
    };
    dispatch(reservationServiceAPI.addReservation(updatedReservationData));
    navigate('/reservations');
    setFormData('');
  };

  return (
    <div>
      <h1>Add Reservation</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Checking Date:
          {' '}
          <input type="text" name="checking_date" value={formData.checking_date} onChange={handleChange} />
        </label>
        <label>
          Checkingout Date:
          {' '}
          <input type="text" name="checkout_date" value={formData.checkout_date} onChange={handleChange} />
        </label>
        <label>
          City:
          {' '}
          <input type="text" name="city" id="city" value={formData.city} onChange={handleChange} />
        </label>
        <label>
          House Price:
          {' '}
          <input type="text" name="house_price" value={formData.house_price} onChange={handleChange} />
        </label>

        <button type="submit" onClick={handleSubmit}>Add Reservation</button>
      </form>
    </div>
  );
};

export default AddReservation;
