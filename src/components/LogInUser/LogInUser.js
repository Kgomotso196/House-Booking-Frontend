import React from 'react'

const LogInUser = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

    const handleChange = (e) => {
        console.log(e)
    };

  return (
    <div>   <form className=" " onSubmit={handleSubmit}>
        <label htmlFor="UserEmail" className="">
          User Email
          <input
            type="text"
            name="userEmail"
            value="user Email value"
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
        
        <div>
          <input type="submit" className="" value="" />
        </div>
      </form></div>
  )
}

export default LogInUser