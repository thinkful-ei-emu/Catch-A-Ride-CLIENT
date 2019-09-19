import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ride from '../Ride/Ride';
import RideApiService from '../../services/ride-api-service';
import RideContext from '../../context/RideContext';
import RideSearchBar from '../RideSearchBar/RideSearchBar';
import './Rides.css';

class Rides extends Component {

  static contextType = RideContext;

  componentDidMount() {
    // const starting = this.context.s;
    RideApiService.getRides()
      .then(res => {
        this.context.setRides(res);
      });
  }

  renderRidesList() {
    const ridePosts = this.context.rides.map((ride, i) => (
      <li key={i}><Ride ride={ride} /></li>
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
