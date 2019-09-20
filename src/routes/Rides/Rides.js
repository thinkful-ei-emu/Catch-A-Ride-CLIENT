import React, { Component } from 'react';
import Ride from '../../components/Ride/Ride';
import RideContext from '../../context/RideContext';
import RideSearchBar from '../../components/RideSearchBar/RideSearchBar';
import { Link } from 'react-router-dom'
import RideApiService from '../../services/RidesService/rides-driver-service';
import './Rides.css';

class Rides extends Component {

  static contextType = RideContext;

  componentDidMount() {
    RideApiService.getRides()
      .then(res => {
        this.context.setRides(res);
      });
  }

  renderRidesList() {
    const ridePosts = this.context.rides.map((ride, i) => (
      <li key={i}><Link to={`/rides/${ride.id}`}><Ride ride={ride} /></Link></li>
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


export default Rides;
