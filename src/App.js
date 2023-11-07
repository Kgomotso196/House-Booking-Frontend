import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavMenu from './components/NavMenu/NavMenu';
import AddHouse from './components/Addhouse/AddHouse';
import DeleteHouse from './components/DeleteHouse';
import AddReservation from './components/AddReservation';
import Reservations from './components/Reservations';
import Home from './components/Home/Home';
import store from './redux/store';
import './App.css';
import HouseDetails from './components/HouseDetails/HouseDetails';

function App() {
  return (
    <Provider store={store}>
      <>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-house" element={<AddHouse />} />
          <Route path="/house-details/:id" element={<HouseDetails />} />
          <Route path="/delete-house" element={<DeleteHouse />} />
          <Route path="/add-reservation" element={<AddReservation />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </>
    </Provider>
  );
}

export default App;
