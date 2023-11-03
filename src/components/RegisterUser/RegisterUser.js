import React from 'react';
import './RegisterUser.css';

const RegisterUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <section className="registerSection">
      <div className="registerSubSection">
        {' '}
        <form className="registerForm" onSubmit={handleSubmit}>
          <h1>Register Here</h1>
          <label htmlFor="UserName" className="">
            Enter Name
            <input
              type="text"
              name="userName"
              value=""
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
              value=""
              onChange={handleChange}
              id="UserEmail"
              className=""
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
            />
          </label>

          <label htmlFor="UserPasswordConfirmation" className="">
            Confirm
            <input
              type="text"
              name="PasswordConfirmation"
              value=""
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
