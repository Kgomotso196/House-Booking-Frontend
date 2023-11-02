import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useEffect } from 'react';
import NavMenu from './components/NavMenu/NavMenu';
import Home from './components/Home';
import AddHouse from './components/AddHouse';
import DeleteHouse from './components/DeleteHouse';
import AddReservation from './components/AddReservation';
import Reservations from './components/Reservations';
import houseServiceAPI from './services/housesService';
import reservationServiceAPI from './services/reservationService';

function App() {
  const ReservationsData = useSelector((state) => state.reservations.reservations);
  const HousesData = useSelector((state) => state.houses.houses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reservationServiceAPI.fetchReservations());
    dispatch(houseServiceAPI.fetchHouses());
  }, [dispatch]);

  let reserveData;
  let houseData;

  // display houses

  if (HousesData.length === 0) {
    houseData = <p>No house data</p>;
  } else {
    houseData = HousesData.map((data) => (
      <p key={data.id}>{data.house_name}</p>
    ));
  }

  // display reservations

  if (ReservationsData.length === 0) {
    reserveData = <p>No reservation Data</p>;
  } else {
    reserveData = ReservationsData.map((data) => (
      <p key={data.checking_date}>{data.checking_date}</p>
    ));
  }

  return (
    <Router>
      <>
        <NavMenu />
        <div className="App">
          <h1>Data appears here</h1>
          <Route exact path="/" component={Home} />
          <Route path="/add-house" component={AddHouse} />
          <Route path="/delete-house" component={DeleteHouse} />
          <Route path="/add-reservation" component={AddReservation} />
          <Route path="/reservations" component={Reservations} />
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
    </Router>
  );
}

export default App;
