import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import NavMenu from './components/NavMenu/NavMenu';
import Home from './components/Home';
import AddHouse from './components/AddHouse';
import DeleteHouse from './components/DeleteHouse';
import AddReservation from './components/AddReservation';
import houseServiceAPI from './services/housesService';
import reservationServiceAPI from './services/reservationService';

function App() {
  const Reservations = useSelector((state) => state.reservations.reservations);
  const Houses = useSelector((state) => state.houses.houses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reservationServiceAPI.fetchReservations());
    dispatch(houseServiceAPI.fetchHouses());
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

  if (Reservations.length === 0) {
    reserveData = <p>No reservation Data</p>;
  }
  Reservations.map((data) => {
    reserveData = <p key={data.checking_date}>{data.checking_date}</p>;
    return reserveData;
  });

  return (
    <>
      <NavMenu />
      <div className="App">
        <h1>Data appears here</h1>
        <Home />
        <AddHouse />
        <DeleteHouse />
        <AddReservation />
        <Reservations />
        <div>
          <strong>From reservationSlice:</strong>
          {reserveData}
        </div>
        <div>
          <strong>From housesSlice:</strong>
          {houseData}
        </div>
      </div>
    </>
  );
}

export default App;
