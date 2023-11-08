import React, { useEffect } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';
import {
  Routes, Route, Outlet, Link,
} from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import AddHouse from './components/Addhouse/AddHouse';
import DeleteHouse from './components/DeleteHouse/DeleteHouse';
import AddReservation from './components/AddReservation';
import Reservations from './components/Reservations';
import SplashScreen from './components/SplashScreen/SplashScreen';
import RegisterUser from './components/RegisterUser/RegisterUser';
import LogInUser from './components/LogInUser/LogInUser';
import authenticationServiceAPI from './services/authenticationService';
import Home from './components/Home/Home';
import store from './redux/store';
import './App.css';
import HouseDetails from './components/HouseDetails/HouseDetails';

function App() {
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticationServiceAPI.checkLogInStatus());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <>
        {user ? (
          <>
            <NavMenu />
            <Routes>
              <Route path="/" element={<Outlet />}>
                <Route index element={<Home />} />
                <Route path="add-house" element={<AddHouse />} />
                <Route path="house-details/:id" element={<HouseDetails />} />
                <Route path="delete-house" element={<DeleteHouse />} />
                <Route path="add-reservation" element={<AddReservation />} />
                <Route path="reservations" element={<Reservations />} />
              </Route>
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<SplashScreen />} />
              <Route path="register" element={<RegisterUser />} />
              <Route
                path="login"
                element={(
                  <>
                    <LogInUser />
                    <div>
                      <Link to="/register">Register here</Link>
                    </div>
                  </>
                )}
              />
            </Route>
          </Routes>
        )}
      </>
    </Provider>
  );
}

export default App;
