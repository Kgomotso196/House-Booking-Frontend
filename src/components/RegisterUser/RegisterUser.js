import React from 'react'

const RegisterUser = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

    const handleChange = (e) => {
        console.log(e)
      };

  return (
    <div>   <form className=" " onSubmit={handleSubmit}>
        <label htmlFor="UserName" className="">
          User Name
          <input
            type="text"
            name="userName"
            value="user Name value"
            onChange={handleChange}
            id="UserName"
            className=""
            placeholder="Enter House Name"
          />
        </label>

        <label htmlFor="userEmail" className=" ">
          User Email
          <input
            type="email"
            name="email"
            value="userEmail"
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
            value="Password"
            onChange={handleChange}
            id="UserPassword"
            className=""
            placeholder="Enter Your Password"
          />
        </label>

        <label htmlFor="UserPasswordConfirmation" className="">
          Password Confirmation
          <input
            type="text"
            name="PasswordConfirmation"
            value="UserPasswordConfirmation"
            onChange={handleChange}
            id="UserPasswordConfirmation"
            className=""
            placeholder="Confirm Your password"
          />
        </label>
        <div>
          <input type="submit" className="" value="" />
        </div>
      </form></div>
  )
}

export default RegisterUser