import React from 'react';
import {Link} from 'react-router-dom';
import DriversApiService from '../../services/RidesService/rides-driver-service';
import PassengersApiService from '../../services/RidesService/rides-passenger-service';
import RideContext from '../../context/RideContext';
import Ride from '../Ride/Ride';
import './UserRides.css';

export default class UserRides extends React.Component {
  static contextType = RideContext;

  state = {
    driverError: null,
    passError: null
  };

  componentDidMount() {
    DriversApiService.getDriverRides()
      .then(res => {
        this.context.setDriverRides(res);
      })
      .catch(res => {
        this.context.clearDriverRides();
        this.setState({driverError: res.error});
      });
    PassengersApiService.getAllRides()
      .then(res => {
        this.context.setPassengerRides(res);
      })
      .catch(res => {
        this.context.clearPassengerRides();
        this.setState({passError: res.error});
      });
  }

  driverRidesList() {
    const driverRides = this.context.driverRides.map((ride, i) => (
      <li className='single-ride' key={i}><Link className='rideLink' to={`/rides/${ride.id}`}><Ride ride={ride} /></Link></li>
    ));
    return (
      <ul className='driverRides'>
        {driverRides}
      </ul>
    );
  }

  passengerRidesList() {
    const passengerRides = this.context.passengerRides.map((ride, i) => (
      <li className='single-ride' key={i}><Link className='rideLink' to={`/rides/${ride.id}`}><Ride ride={ride} /></Link></li>
    ));
    return (
      <ul className='passengerRides'>
        {passengerRides}
      </ul>
    );
  }

  render() {
 
    const { driverError, passError } = this.state;
    return (
      <>
        <h2 className='myrides elegantshadow'>My Rides</h2>
        <h3 className='divide'>Driver</h3>
        {driverError && <p className='errorMessage'>{driverError}</p>}
        {this.driverRidesList()}
        <h3 className='divide'>Passenger</h3>
        {passError && <p className='errorMessage'>{passError}</p>}
        {this.passengerRidesList()}
      </>
    );
  }
}
