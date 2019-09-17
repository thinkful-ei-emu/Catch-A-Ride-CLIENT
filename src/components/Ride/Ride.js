import React from 'react';
import JoinRideButton from '../JoinRideButton/JoinRideButton';

export default function Ride() {
    return (
        <div>
            <hr />
            <div>
                <span>DRIVER NAME - </span>
                <span>02/02/2020 12:05PM</span>
            </div>
            <div>
                <h3>Meetup Location</h3>
                <div><img src="" alt="GOOGLE MAPS" /></div>
            </div>
            <div>
                <h3>Destination</h3>
                <div><img src="" alt="GOOGLE MAPS" /></div>
            </div>
            <br />
            <div>
                <span># of Seats: 3</span><br />
                <span>Compensation: $7</span>
            </div>
            <br />
            <div>
                <span>Join Ride</span>
                <JoinRideButton />
            </div>

        </div>
    )
}
