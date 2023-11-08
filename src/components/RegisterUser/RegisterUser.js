import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authenticationServiceAPI from '../../services/authenticationService';
import './Registeruser.css';

const RegisterUser = () => {
  const [RegisterData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [response, setResponse] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...RegisterData, [name]: value });
  };

  const CurrentUser = useSelector((state) => state.authentication.registrationData);
  console.log(CurrentUser);
  // useEffect(() => {
  //   dispatch(authenticationServiceAPI.checkLogInStatus());
  // }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRegistrationData = {
      name: RegisterData.name,
      email: RegisterData.email,
      password: RegisterData.password,
      password_confirmation: RegisterData.passowrd_confirmation,
    };

    dispatch(authenticationServiceAPI.registerUser(updatedRegistrationData));
    RegisterData.name = '';
    RegisterData.email = '';
    RegisterData.password_confirmation = '';
    RegisterData.password = '';
  };

  useEffect(() => {
    if (CurrentUser !== null) {
      setResponse('Thank You for registering. Proceed to log in');
    } else {
      setResponse('Enter you name, Email and password to login');
    }
  }, [CurrentUser]);
  return (
    <section className="registerSection">
      <div className="registerSubSection">
        {' '}
        <form className="registerForm" onSubmit={handleSubmit}>
          <div>
            {' '}
            <h3>Register Here</h3>
            {' '}
            <h4><Link to="/login">Login here</Link></h4>
          </div>
          {response && <div className=" ">{response}</div>}
          <label htmlFor="UserName" className="">
            Enter Name
            <input
              type="text"
              name="name"
              value={RegisterData.name}
              onChange={handleChange}
              id="UserName"
              className=""
            />
          </label>

          <label htmlFor="userEmail" className=" ">
            User Email
            <input
              type="email"
              name="email"
              value={RegisterData.email}
              onChange={handleChange}
              id="UserEmail"
              className=""
            />
          </label>

          <label htmlFor="UserPassword" className="">
            Password
            <input
              type="password"
              name="password"
              value={RegisterData.password}
              onChange={handleChange}
              id="UserPassword"
              className=""
            />
          </label>

          <label htmlFor="UserPasswordConfirmation" className="">
            Confirm
            <input
              type="password"
              name="password_confirmation"
              value={RegisterData.passowrd_confirmation}
              onChange={handleChange}
              id="UserPasswordConfirmation"
              className=""
              placeholder="Confirm your password"
            />
          </label>
          <div className="submitContainer">
            <input type="submit" className="registerSubmit" value="Submit" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterUser;
