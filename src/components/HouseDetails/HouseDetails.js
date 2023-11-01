import React from 'react';
// import { UseSelector } from 'react-redux/es/hooks/useSelector';
// import { useParams } from 'react-router-dom';
import './HouseDetails.css';

const HouseDetails = () => (
  <div className="house-details">
    <div className="details">
      <img src="https://media.istockphoto.com/id/1448386210/photo/a-large-gray-craftsman-new-construction-house-with-a-landscaped-yard-and-leading-pathway.webp?s=1024x1024&w=is&k=20&c=zr2ApXoNwve2CoVj3GfyaWU06ELZV4EzST6nuyOvrqU=" alt="House" />
      <h1>House Name: </h1>
      <p>Location</p>
      <p>Description</p>
      <div>
        <button type="button" className="reserve" onClick={console.log('reserve')}>Reserve</button>
      </div>
    </div>
  </div>
);
export default HouseDetails;
