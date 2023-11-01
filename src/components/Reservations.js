import React, { useState, useEffect } from 'react';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch('http://3001/api/v1/reservations');
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        // Handling error
      }
    };

    fetchReservations();
  }, []);

  return (
    <div>
      <h1>Reservations</h1>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            {/* Reservation details will show here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservations;
