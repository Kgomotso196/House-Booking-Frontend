import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import reservationServiceAPI from '../services/reservationService';
import houseServiceAPI from '../services/housesService';

const AddReservation = () => {
  const { houses } = useSelector((state) => state.houses);
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
      user_id: 1, // Include the user_id here
      house_id: formData.house,
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
        <label htmlFor="checking_date">
          Checking Date:
          <input type="text" name="checking_date" id="checking_date" value={formData.checking_date} onChange={handleChange} />
        </label>
        <label htmlFor="checkout_date">
          Checkingout Date:
          <input type="text" name="checkout_date" id="checkout_date" value={formData.checkout_date} onChange={handleChange} />
        </label>
        <label htmlFor="city">
          City:
          <input type="text" name="city" id="city" value={formData.city} onChange={handleChange} />
        </label>
        <label htmlFor="house_price">
          House Price:
          <input type="text" id="house_price" name="house_price" value={formData.house_price} onChange={handleChange} />
        </label>

        <label htmlFor="house">
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
        <button type="submit" onClick={handleSubmit}>Add Reservation</button>
      </form>
    </div>
  );
};

export default AddReservation;
