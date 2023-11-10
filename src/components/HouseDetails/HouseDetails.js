import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faGear } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Wheel from '../../assets/Wheel.png';
import houseServiceAPI from '../../services/housesService';
import './HouseDetails.css';

// eslint-disable
function HouseDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const houses = useSelector((state) => state.houses.houses);
  const houseDetails = houses.find((house) => house.id === parseInt(id, 10));
  const isLoading = useSelector((state) => state.houses.isLoading);
  const error = useSelector((state) => state.houses.error);

  useEffect(() => {
    dispatch(houseServiceAPI.fetchHouses());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error fetching houses:
        {error}
      </div>
    );
  }

  return (
    <div className="house-details">
      <div className="details">
        <div id="house-img-details">
          <div id="circular-container" className="position-absolute pt-1 pr-1">
            <img src={houseDetails.house_image} alt={houseDetails.house_name} />
          </div>
        </div>
        <div className="right-most position-absolute pt-1 end-0 p-5">
          <h2 id="house-name" className="font-weight-bold">{houseDetails.house_name}</h2>
          <Table striped responsive size="sm">
            <thead />
            <tbody>
              <tr>
                <td className="custom-column"><strong>Location:</strong></td>
                <td className="custom-column">{houseDetails.location}</td>
              </tr>
              <tr>
                <td className="custom-column"><strong>Description:</strong></td>
                <td className="custom-column">{houseDetails.description}</td>
              </tr>
            </tbody>
          </Table>
          <p>
            <strong>5% Discount</strong>
            {' '}
            for new users
          </p>
          <p className="others">
            <Link to="/"><p className="view-others">VIEW&nbsp;&nbsp;OTHER&nbsp;&nbsp;HOUSES&nbsp;&raquo;</p></Link>
            <img src={Wheel} alt="Wheel" />
          </p>
          <div className="reserve-btn">
            <Link to="/add-reservation">
              <button type="button" className="reserve">
                <FontAwesomeIcon icon={faGear} />
                Reserve
                <FontAwesomeIcon icon={faChevronCircleRight} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseDetails;
