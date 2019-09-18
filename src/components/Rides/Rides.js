import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ride from '../Ride/Ride';
import RideContext from '../../context/RideContext';
import RideSearchBar from '../RideSearchBar/RideSearchBar';
import RideApiService from '../../services/RidesService/rides-driver-service';
import { Link } from 'react-router-dom'
import './Rides.css';

class Rides extends Component {

  static contextType = RideContext;

  renderRidesList() {
    const ridePosts = this.context.rides.map((ride, i) => (
      <Link to={`/rides/${ride.id}`}><li key={i}><Ride ride={ride} /></li></Link>
    ));
    return (
      <ul>
        {ridePosts}
      </ul>
    );
  }

  render() {
    return (
      <>
        <h2>Rides</h2>
        <RideSearchBar />
        {this.renderRidesList()}
      </>
    );
  }
}
Rides.propTypes = {
  rides: PropTypes.array.isRequired
};

export default Rides;
