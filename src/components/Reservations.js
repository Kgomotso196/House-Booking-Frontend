import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reservationServiceAPI from '../services/reservationService';

const Reservations = () => {
  const dispatch = useDispatch();
  const { reservations } = useSelector((state) => state.reservations);

  useEffect(() => {
    if (!reservations.length) {
      dispatch(reservationServiceAPI.fetchReservations());
    }
  }, [dispatch, reservations.length]);

  return (
    <div>
      <h1>Reservations are  here</h1>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            {/* <p>{reservation.house_price}</p> */}
            <p>{reservation.city}</p>
            <p>{reservation.checking_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservations;
