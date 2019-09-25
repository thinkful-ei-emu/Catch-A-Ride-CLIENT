import React, { Component } from 'react';
// import JoinRideButton from '../JoinRideButton/JoinRideButton';
import moment from 'moment';
import './Ride.css';

class Ride extends Component {
  render() {
    const date_time = moment(this.props.ride.date_time).format('MM/DD/YYYY @ h:mmA');
    return (
      <>
        <p className='ride-info'>
          {date_time}
        </p>
        
        <span className='labels'>
          <h3 className='locations start'>Meetup Location</h3>
          <h3 className='locations destination'>Destination</h3>
        </span>
        <span className='locations'>
          <p>{this.props.ride.starting}</p>
          <p>{this.props.ride.destination}</p>
        </span>
        <p className='driver'>Driver Name: {this.props.ride.driver_name}</p>
        <p># of seats: {this.props.ride.capacity}</p>
        <p>Description: {this.props.ride.description}</p>
      </>
    );
  }
}

export default Ride;
