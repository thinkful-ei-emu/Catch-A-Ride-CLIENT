import React, { Component } from 'react';
// import JoinRideButton from '../JoinRideButton/JoinRideButton';
import moment from 'moment';
import './Ride.css';

class Ride extends Component {
  render() {
    const date = moment(this.props.ride.date).format('MM/DD/YYYY');
    const time = moment(this.props.ride.time, 'HH:mm').format('h:mmA');
    console.log(this.props.ride);
    return (
      <>
        <p className='driver-info'>
          {/* {this.props.ride.date} */}
          {date} @ {time}
        </p>
        <span className='labels'>
          <h3 className='locations start'>Meetup Location</h3>
          <h3 className='locations destination'>Destination</h3>
        </span>
        <span className='locations'>
          <p>{this.props.ride.starting}</p>
          <p>{this.props.ride.destination}</p>
        </span>
        <p># of seats: {this.props.ride.capacity}</p>
        <p>Description: {this.props.ride.description}</p>
      </>
    );
  }
}

export default Ride;
