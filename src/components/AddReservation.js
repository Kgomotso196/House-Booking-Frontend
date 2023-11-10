import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import reservationServiceAPI from '../services/reservationService';
import houseServiceAPI from '../services/housesService';
import './AddReservation.css';

// eslint-disable
function AddReservation() {
  const { houses } = useSelector((state) => state.houses);
  const currentUser = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(houseServiceAPI.fetchHouses());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    checking_date: '',
    checkout_date: '',
    city: '',
    house_price: '',
    house: '',
    // Add other fields as per your reservation model
  });

  const notReservedHouses = houses.filter((house) => !house.reservation);

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
      user_id: currentUser.id, // Include the user_id here
      house_id: formData.house,
      house_price: formData.house_price,

    };
    dispatch(reservationServiceAPI.addReservation(updatedReservationData));
    navigate('/reservations');
    setFormData('');
  };

  return (
    <div className="reservationCard">
      <h1>Add Reservation</h1>
      <form onSubmit={handleSubmit} className="resrevationForm">
        <div>
          <label htmlFor="checking_date" className="formElement">
            <div>Checking Date:</div>
            <input type="text" name="checking_date" id="checking_date" placeholder="dd/mm/yyyy" value={formData.checking_date} onChange={handleChange} className="reservationInput" />
          </label>
        </div>

        <div>
          <label htmlFor="checkout_date" className="formElement">
            <div>Checkingout Date:</div>
            <input type="text" name="checkout_date" id="checkout_date" placeholder="dd/mm/yyyy" value={formData.checkout_date} onChange={handleChange} className="reservationInput" />
          </label>
        </div>

        <div>
          <label htmlFor="city" className="formElement">
            <div>City:</div>
            <input type="text" name="city" id="city" value={formData.city} onChange={handleChange} className="reservationInput" />
          </label>
        </div>

        <div>
          <label htmlFor="house_price" className="formElement">
            <div>House Price:</div>
            <input type="text" id="house_price" name="house_price" value={formData.house_price} onChange={handleChange} className="reservationInput" />
          </label>
        </div>

        <div>
          <label htmlFor="house" className="formElement">
            Select House
            <select
              name="house"
              value={formData.house}
              onChange={handleChange}
            >
              <option value="">Select a house</option>
              {notReservedHouses.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.house_name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button type="submit" onClick={handleSubmit}>Add Reservation</button>
      </form>
    </div>
  );
}

export default AddReservation;
