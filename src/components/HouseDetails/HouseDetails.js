import React from 'react';
// import { UseSelector } from 'react-redux/es/hooks/useSelector';
// import { useParams } from 'react-router-dom';
import './HouseDetails.css';
import Table from 'react-bootstrap/Table';

const HouseDetails = () => (
  <div className="house-details">
    <div className="details">
      <img src="https://media.istockphoto.com/id/1448386210/photo/a-large-gray-craftsman-new-construction-house-with-a-landscaped-yard-and-leading-pathway.webp?s=1024x1024&w=is&k=20&c=zr2ApXoNwve2CoVj3GfyaWU06ELZV4EzST6nuyOvrqU=" alt="House" />
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

      {/* <div>
        <button type="button" className="reserve" onClick={console.log('reserve')}>Reserve</button>
      </div> */}
    </div>
  </div>
);
export default HouseDetails;
