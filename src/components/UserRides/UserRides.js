import React from 'react';
import DriversApiService from '../../services/RidesService/rides-driver-service';
import PassengersApiService from '../../services/RidesService/rides-passenger-service';
import RideContext from '../../context/RideContext';
import Ride from '../Ride/Ride';
import './UserRides.css';

export default class UserRides extends React.Component {
  static contextType = RideContext;

  componentDidMount() {
    DriversApiService.getDriverRides()
      .then(res => {
        this.context.setDriverRides(res);
      });
    PassengersApiService.getAllRides()
      .then(res => {
        this.context.setPassengerRides(res);
      });
  }

  driverRidesList() {
    const driverRides = this.context.driverRides.map((ride, i) => (
      <li key={i}><Ride ride={ride} /></li>
    ));
    return (
      <ul>
        {driverRides}
      </ul>
    );
  }

  passengerRidesList() {
    const passengerRides = this.context.passengerRides.map((ride, i) => (
      <li key={i}><Ride ride={ride} /></li>
    ));
    return (
      <ul>
        {passengerRides}
      </ul>
    );
  }

  render() {
    return (
      <>
        <h2>My Rides</h2>
        <h3>Driver</h3>
        {this.driverRidesList()}
        <h3>Passenger</h3>
        {this.passengerRidesList()}
      </>
    );
  }
}
