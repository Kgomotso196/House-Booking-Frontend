import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reservationServiceAPI from '../services/reservationService';
import './Reservation.css';

// eslint-disable
function Reservations() {
  const dispatch = useDispatch();
  const { reservations } = useSelector((state) => state.reservations);

  useEffect(() => {
    if (!reservations.length) {
      dispatch(reservationServiceAPI.fetchReservations());
    }
  }, [dispatch, reservations.length]);

  return (
    <div className="reservationContainer">
      <div className="headerContainer"><h1>RESERVATIONS</h1></div>
      <ul className="reservationCard">
        {reservations.map((reservation) => (
          <li key={reservation.id} className="reservationElement">
            <div>
              PRICE:&nbsp;&nbsp;
              {reservation.house_price}
            </div>
            <div>
              CITY:&nbsp;&nbsp;
              {reservation.city}
            </div>
            <div>
              CHECKIN:&nbsp;&nbsp;
              {reservation.checking_date}
            </div>
            <div>
              HOUSE:&nbsp;&nbsp;
              {reservation.house.house_name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reservations;
