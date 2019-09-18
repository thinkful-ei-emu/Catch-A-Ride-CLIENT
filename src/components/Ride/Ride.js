import React, { Component } from 'react';
import JoinRideButton from '../JoinRideButton/JoinRideButton';
import './Ride.css';

class Ride extends Component {


    render() {
        console.log(this.props.ride)
        return (
            <>
                <p className='driver-info'>
                    <span>{this.props.ride.date}</span>
                </p>
                <span className='locations'>
                    <h3 className='locations start'>Meetup<br />Location</h3>
                    <h3 className='locations destination'>Destination</h3>
                </span>
                <span className='maps'>
                    <img src="https://image.freepik.com/free-vector/street-map-with-pins-background_23-2147620445.jpg" alt="GOOGLE MAPS" className='start-map' height='100px' />
                    <br /><span>{this.props.ride.starting}</span>
                    <img src="https://image.freepik.com/free-vector/street-map-with-pins-background_23-2147620445.jpg" alt="GOOGLE MAPS" className='end-map' height='100px' />
                    <br /><span>{this.props.ride.destination}</span>
                </span>
                <span># of seats: {this.props.ride.capacity}</span><br />
                <span>Description: {this.props.ride.description}</span>
                <p>Join Ride</p>
                <JoinRideButton />
            </>
        )
    }
}

export default Ride;
