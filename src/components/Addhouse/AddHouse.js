import React from 'react';

const AddHouse = () => (
  <div className="add-house">
    <h1 className="text-primary">Add New House</h1>
    <form className="add-house-form">
      <label htmlFor="houseName" className="form-label text-primary">
        House Name
        <input
          type="text"
          name="name"
        //   value={houseDatas.name}
        //   onChange={handleChange}
          id="houseName"
          className="form-control"
          placeholder="Enter House Name"
        />
      </label>
      <label htmlFor="houseimage" className="form-label text-primary">
        House Image
        <input
          type="text"
          name="name"
        //   value={houseDatas.name}
        //   onChange={handleChange}
          id="houseimage"
          className="form-control"
          placeholder="Enter House image"
        />
      </label>
      <label htmlFor="houseLocation" className="form-label text-primary">
        House Name
        <input
          type="text"
          name="name"
        //   value={houseDatas.name}
        //   onChange={handleChange}
          id="houseLocation"
          className="form-control"
          placeholder="Enter House Location"
        />
      </label>
      <label htmlFor="houseDEscription" className="form-label text-primary">
        House Name
        <input
          type="text"
          name="name"
        //   value={houseDatas.name}
        //   onChange={handleChange}
          id="houseDEscription"
          className="form-control"
          placeholder="Enter Description"
        />
      </label>
      <div>
        <input type="submit" className="btn btn-primary" value="Add House" />
      </div>
    </form>
  </div>
);
export default AddHouse;
