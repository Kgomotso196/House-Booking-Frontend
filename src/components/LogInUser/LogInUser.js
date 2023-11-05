import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authenticationServiceAPI from '../../services/authenticationService';
import './LogInUser.css';

const LogInUser = () => {
  const [LogInData, setLogInData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  console.log(error);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogInData({ ...LogInData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedLogInData = {
      user: {
        email: LogInData.email,
        password: LogInData.password,
      },
    };
    setError('its successful');
    console.log(updatedLogInData);
    dispatch(authenticationServiceAPI.signInUser(updatedLogInData));
  };

  return (
    <section className="logInSection">
      <div className="logInSubSection">
        {' '}
        <form className="LogInForm" onSubmit={handleSubmit}>
          <h1>Login Here</h1>
          <label htmlFor="UserEmail" className="">
            User Email
            <input
              type="email"
              name="email"
              value={LogInData.email}
              onChange={handleChange}
              id="UserEmail"
              className=""
              placeholder="Enter Your Email"
            />
          </label>

          <label htmlFor="UserPassword" className="">
            Password
            <input
              type="password"
              name="password"
              value={LogInData.password}
              onChange={handleChange}
              id="UserPassword"
              className=""
              placeholder="Enter Your Password"
            />
          </label>

          <div className="submitContainer">
            <input type="submit" className="registerSubmit" value="Login" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default LogInUser;
