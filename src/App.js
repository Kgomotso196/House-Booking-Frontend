import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import NavMenu from './components/NavMenu/NavMenu';
// import fetchReservations from './services/reservationService';
// import fetchHouses from './services/housesService';
// import Home from './components/Home';
import AddHouse from './components/Addhouse/AddHouse';
// import DeleteHouse from './components/DeleteHouse';
// import AddReservation from './components/AddReservation';
// import Reservations from './components/Reservations';
// import HouseDetails from './components/HouseDetails/HouseDetails';

function App() {
  return (
    <>
      <NavMenu />
      <div className="App">
        {/* <Home />
        <HouseDetails /> */}
        <AddHouse />
        {/* <DeleteHouse />
        <AddReservation />
        <Reservations /> */}
      </div>
    </>
  );
}

export default App;
