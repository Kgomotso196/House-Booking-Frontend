import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addHouse } from '../../redux/slices/PostHousesSlice';
import './AddHouse.css';
const AddHouse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [houseData, setHouseData] = useState({
    name: '',
    image: '',
    location: '',
    description: '',
  });
  // Add a state to track validation errors
  const [validationErrors, setValidationErrors] = useState({
    image: '',
  });
  const currentUser = useSelector((state) => state.authentication.user);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHouseData({ ...houseData, [name]: value });
    // Reset the validation error when the user makes changes
    setValidationErrors({ ...validationErrors, [name]: '' });
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
      setError('Please fill in all fields');
    } else {
      // Regular expression to validate the image URL format
      const urlRegex = /^(http|https):\/\/[^\s/$.?#].[^\s]*$/;
      if (!urlRegex.test(houseData.image)) {
        // If the image URL is not in the correct format, set an error message
        setValidationErrors({ ...validationErrors, image: ':octagonal_sign: INVALID URL ' });
      } else {
        // Image URL is valid, proceed to dispatch the action
        const updatedHouseData = {
          house_name: houseData.name,
          house_image: houseData.image,
          location: houseData.location,
          description: houseData.description,
          user_id: currentUser.id, // Include the user_id here
        };
        try {
          dispatch(addHouse(updatedHouseData)); // Use updatedHouseData here
        } catch (error) {
          setError('OPPS :grimacing: Something went wrong', error);
        }
      }
      navigate('/');
    }
  };
  return (
    <div className="add-house">
      {error && <div className="alert alert-danger">{error}</div>}
      <h1>ADD A NEW HOUSE</h1>
      <form className="add-house-form" onSubmit={handleSubmit}>
        <label htmlFor="houseName" className="form-label">
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
        <label htmlFor="houseimage" className="form-label">
          House Image
          <input
            type="text"
            name="image"
            value={houseData.image}
            onChange={handleChange}
            id="houseimage"
            className={`form-control ${validationErrors.image ? 'input-error' : ''}`}
            placeholder="Enter House image"
          />
          {/* Display the validation error message if it exists */}
          {validationErrors.image && (
            <p className="error-message">{validationErrors.image}</p>
          )}
        </label>
        <label htmlFor="houseLocation" className="form-label">
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
        <label htmlFor="houseDescription" className="form-label">
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
          <input type="submit" className="btn btn-primary" value="ADD HOUSE" />
        </div>
      </form>
    </div>
  );
};
