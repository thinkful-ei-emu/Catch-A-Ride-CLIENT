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
      <li className='ride' key={i}><Ride ride={ride} /></li>
    ));
    return (
      <ul className='driverRides'>
        {driverRides}
      </ul>
    );
  }

  passengerRidesList() {
    const passengerRides = this.context.passengerRides.map((ride, i) => (
      <li className='ride' key={i}><Ride ride={ride} /></li>
    ));
    return (
      <ul className='passengerRides'>
        {passengerRides}
      </ul>
    );
  }

  render() {
    return (
      <>
        <h2>My Rides</h2>
        <h3 className='divide'>Driver</h3>
        {this.driverRidesList()}
        <h3 className='divide'>Passenger</h3>
        {this.passengerRidesList()}
      </>
    );
  }
}
