import React from 'react';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
// import Home from './components/Home';
import AddHouse from './components/Addhouse/AddHouse';
import DeleteHouse from './components/DeleteHouse';
import AddReservation from './components/AddReservation';
import Reservations from './components/Reservations';
import HouseDetails from './components/HouseDetails/HouseDetails';
import SplashScreen from './components/SplashScreen/SplashScreen';
import RegisterUser from './components/RegisterUser/RegisterUser';
import LogInUser from './components/LogInUser/LogInUser';
// import authenticationServiceAPI from './services/authenticationService';

function App() {
  // const value = useSelector((state) => state.authentication.user);
  // console.log(value);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authenticationServiceAPI.checkLogInStatus());
  // }, [dispatch]);

  return (
    <>
      <NavMenu />
      <Routes>
        <Route path="/" element={<HouseDetails />} />
        <Route path="/add-house" element={<AddHouse />} />
        <Route path="/delete-house" element={<DeleteHouse />} />
        <Route path="/add-reservation" element={<AddReservation />} />
        <Route path="/reservations" element={<Reservations />} />
        {/* remove these codes */}
        <Route path="/spash" element={<SplashScreen />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/login" element={<LogInUser />} />
      </Routes>
    </>
  );
}

export default App;
