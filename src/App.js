import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
// import Home from './components/Home';
import AddHouse from './components/Addhouse/AddHouse';
import DeleteHouse from './components/DeleteHouse';
import AddReservation from './components/AddReservation';
import Reservations from './components/Reservations';
import HouseDetails from './components/HouseDetails/HouseDetails';

function App() {
  return (
    <>
      <NavMenu />
      <Routes>
        <Route path="/" element={<HouseDetails />} />
        <Route path="/add-house" element={<AddHouse />} />
        <Route path="/delete-house" element={<DeleteHouse />} />
        <Route path="/add-reservation" element={<AddReservation />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </>
  );
}

export default App;
