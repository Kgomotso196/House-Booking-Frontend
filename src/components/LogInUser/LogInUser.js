import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authenticationServiceAPI from '../../services/authenticationService';
import './LogInUser.css';

const LogInUser = () => {
  const [LogInData, setLogInData] = useState({
    name: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogInData({ ...LogInData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedLogInData = {
      name: LogInData.name,
      password: LogInData.password,
    };
    dispatch(authenticationServiceAPI.signInUser(updatedLogInData));
    navigate('/');
  };

  return (
    <section className="logInSection">
      <div className="logInSubSection">
        {' '}
        <form className="LogInForm" onSubmit={handleSubmit}>
          <div>
            {' '}
            <h2>Login page</h2>
            {' '}
            <button type="button"><Link to="/register">Register here</Link></button>
          </div>
          <label htmlFor="name" className="">
            User Name
            <input
              type="text"
              name="name"
              value={LogInData.name}
              onChange={handleChange}
              id="UserEmail"
              className=""
              placeholder="Enter Your Name"
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
