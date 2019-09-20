import React, { Component } from 'react';
import Ride from '../../components/Ride/Ride';
import RideContext from '../../context/RideContext';
import RideSearchBar from '../../components/RideSearchBar/RideSearchBar';
import { Link } from 'react-router-dom'
import './Rides.css';
import JoinRideButton from '../../components/JoinRideButton/JoinRideButton';

class Rides extends Component {
  static contextType = RideContext;

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
