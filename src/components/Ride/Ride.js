import React, { Component } from 'react';

import moment from 'moment';
import './Ride.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

class Ride extends Component {
  render() {
    const date_time = moment(this.props.ride.date_time).format('MM/DD/YYYY @ h:mmA');
    let remainingSeats = 0;
    let count = 0;

    let sRArray = Object.keys(this.props.ride);

    for(let i = 6; i < sRArray.length; i++) {
      count++;
      if(this.props.ride.capacity < count) {
        break;
      }

      if(this.props.ride[sRArray[i]] === null) {
        remainingSeats++;
      }
    }
    if(remainingSeats === 0) {
      remainingSeats = 'This ride is full';
    }

    return (
      <>
        <p className='ride-info'>
          {date_time}
        </p>
        
        <span className='labels'>
          <h3 className='locations'>Meetup<br />Location</h3>
          <h3 className='locations'>Destination</h3>
        </span>
        <span className='locations'>
          <p className='location'><FontAwesomeIcon icon={faMapMarkerAlt}/> {this.props.ride.starting}</p>
          <p className='destination'><FontAwesomeIcon icon={faMapMarkerAlt}/> {this.props.ride.destination}</p>
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
