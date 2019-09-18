import React from 'react';
import JoinRideButton from '../JoinRideButton/JoinRideButton';
import './Ride.css';

export default function Ride() {
    return (
        <>
            <p className='driver-info'>
                DRIVER NAME
                02/02/2020 12:05PM
            </p>
            <span className='locations'>
                <h3 className='locations start'>Meetup<br />Location</h3>
                <h3 className='locations destination'>Destination</h3>
            </span>
            <span className='maps'>
                <img src="https://image.freepik.com/free-vector/street-map-with-pins-background_23-2147620445.jpg" alt="GOOGLE MAPS" className='start-map' height='100px' />
                <img src="https://image.freepik.com/free-vector/street-map-with-pins-background_23-2147620445.jpg" alt="GOOGLE MAPS" className='end-map' height='100px' />
            </span>
            <p># of Seats: 3</p>
            <p>Compensation: $7</p>
            <p>Join Ride</p>
            <JoinRideButton />
        </>
    )
}
