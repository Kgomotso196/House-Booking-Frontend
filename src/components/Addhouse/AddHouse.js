import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHouse } from '../../redux/slices/PostHousesSlice';

const AddHouse = () => {
  const dispatch = useDispatch();
  const [houseData, setHouseData] = useState({
    name: '',
    image: '',
    location: '',
    description: '',
  });
  // const testData = {
  //   house_name: 'Cozy Cottage',
  //   house_image: 'cottage.jpg',
  //   location: '1234 Elm Street, Anytown, USA',
  //   description: 'A beautiful and cozy cottage in a quiet neighborhood.',
  //   user_id: 1,
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHouseData({ ...houseData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the form fields are empty
    if (
      !houseData.name
      || !houseData.image
      || !houseData.location
      || !houseData.description
    ) {
      // Handle the case where not all values are present (e.g., show an error message)
      console.log('Please fill in all fields.');
    } else {
      const updatedHouseData = {
        house_name: houseData.name,
        house_image: houseData.image,
        location: houseData.location,
        description: houseData.description,
        user_id: 1, // Include the user_id here
      };
      console.log('House Data', updatedHouseData);

      try {
        dispatch(addHouse(updatedHouseData)); // Use updatedHouseData here
      } catch (error) {
        console.error('Error dispatching the addHouse action:', error);
      }
    }
  };

  return (
    <div className="add-house">
      <h1 className="text-primary">Add New House</h1>
      <form className="add-house-form" onSubmit={handleSubmit}>
        <label htmlFor="houseName" className="form-label text-primary">
          House Name
          <input
            type="text"
            name="name"
            value={houseData.name}
            onChange={handleChange}
            id="houseName"
            className="form-control"
            placeholder="Enter House Name"
          />
        </label>
        <label htmlFor="houseimage" className="form-label text-primary">
          House Image
          <input
            type="text"
            name="image"
            value={houseData.image}
            onChange={handleChange}
            id="houseimage"
            className="form-control"
            placeholder="Enter House image"
          />
        </label>
        <label htmlFor="houseLocation" className="form-label text-primary">
          House Location
          <input
            type="text"
            name="location"
            value={houseData.location}
            onChange={handleChange}
            id="houseLocation"
            className="form-control"
            placeholder="Enter House Location"
          />
        </label>
        <label htmlFor="houseDescription" className="form-label text-primary">
          Description
          <input
            type="text"
            name="description"
            value={houseData.description}
            onChange={handleChange}
            id="houseDescription"
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
};

export default AddHouse;
