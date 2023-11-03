import React from 'react';
import './LogInUser.css';

const LogInUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleChange = (e) => {
    console.log(e);
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
              type="text"
              name="userEmail"
              value=""
              onChange={handleChange}
              id="UserEmail"
              className=""
              placeholder="Enter Your Email"
            />
          </label>

          <label htmlFor="UserPassword" className="">
            Password
            <input
              type="text"
              name="Password"
              value=""
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
