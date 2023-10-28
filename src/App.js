// eslint-disable

import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import fetchReservations from './services/reservationService';
import fetchHouses from './services/housesService';

function App() {
  const Reservations = useSelector((state) => state.reservations.reservations);
  const Houses = useSelector((state) => state.houses.houses);
  console.log(Houses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations());
    dispatch(fetchHouses());
  }, [dispatch]);

  let reserveData;
  let houseData;

  // display houses

  if (Houses.length === 0) {
    houseData = <p>No house data</p>;
  } else {
    Houses.map((data) => {
      houseData = <p>{data.house_name}</p>;
      return houseData;
    });
  }

  // display reservations

  if (Reservations.lenght === 0) {
    reserveData = <p>No reservation Data</p>;
  }
  Reservations.map((data) => {
    reserveData = <p key={data.checking_date}>{data.checking_date}</p>;
    return reserveData;
  });

  return (
    <div className="App">
      <h1>Data appears here</h1>
      <div>
        <strong>From reservationSlice:</strong>
        {reserveData}
      </div>
      <div>
        <strong>From housesSlice:</strong>
        {houseData}
      </div>
    </div>
  );
}

export default App;
