import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavMenu from './components/NavMenu/NavMenu';
import AddHouse from './components/Addhouse/AddHouse';
import DeleteHouse from './components/DeleteHouse';
import AddReservation from './components/AddReservation';
import Reservations from './components/Reservations';
import HouseDetails from './components/HouseDetails/HouseDetails';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
