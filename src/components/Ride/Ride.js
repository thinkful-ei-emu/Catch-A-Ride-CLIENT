import React, { Component } from 'react';
// import JoinRideButton from '../JoinRideButton/JoinRideButton';
import moment from 'moment';
import './Ride.css';

class Ride extends Component {
  render() {
    const date_time = moment(this.props.ride.date_time).format('MM/DD/YYYY @ h:mmA');
    let remainingSeats = 0;
    let count = 0;

    let sRArray = Object.keys(this.props.ride);

    for(let i = 6; i < sRArray.length; i++){
      count++;
      if(this.props.ride.capacity < count){
        break;
      }

      if(this.props.ride[sRArray[i]] === null){
        remainingSeats++;
      }
    }
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
        <p>Capacity: {this.props.ride.capacity}</p>
        <p>Remaining Seats: {remainingSeats}</p>
        <p>Description: {this.props.ride.description}</p>
      </>
    );
  }
}

export default Ride;
