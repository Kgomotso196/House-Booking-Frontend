import React from 'react';
import './HouseDetails.css';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faGear } from '@fortawesome/free-solid-svg-icons'; // Import the specific icons you need
import Wheel from '../../assets/Wheel.png'; // Import the image

const HouseDetails = () => (
  <div className="house-details">
    <img src="https://media.istockphoto.com/id/1448386210/photo/a-large-gray-craftsman-new-construction-house-with-a-landscaped-yard-and-leading-pathway.webp?s=1024x1024&w=is&k=20&c=zr2ApXoNwve2CoVj3GfyaWU06ELZV4EzST6nuyOvrqU=" alt="House" />
    <div className="details">
      <h2>House</h2>
      <Table striped responsive size="sm">
        <thead />
        <tbody>
          <tr>
            <td><strong>Location:</strong></td>
            <td>City, Country</td>
          </tr>
          <tr>
            <td><strong>Description:</strong></td>
            <td>Description text goes here.</td>
          </tr>
        </tbody>
      </Table>
      <p>
        <strong>5% Discount</strong>
        {' '}
        for new users
      </p>
      <p className="others">
        View other houses&nbsp;&raquo;
        <img src={Wheel} alt="Wheel" />
      </p>

      <div>
        <button type="button" className="reserve" onClick={() => console.log('reserve')}>
          <FontAwesomeIcon icon={faGear} />
          Reserve
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </button>
      </div>
    </div>
  </div>
);

export default HouseDetails;
