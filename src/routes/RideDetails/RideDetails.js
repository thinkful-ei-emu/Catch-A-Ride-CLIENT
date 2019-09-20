import React, { Component } from 'react'
import config from '../../config'
import RideContext from '../../context/RideContext';
import Gmaps from '../../components/Maps/Gmaps';
import moment from 'moment';
import TokenService from '../../services/token-service';
import JoinRideButton from '../../components/JoinRideButton/JoinRideButton';

export default class RideDetails extends Component {
    static contextType = RideContext;

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/rides/${this.props.match.params.ride_id}`, {
            method: 'GET',
            headers: {
                Authorization: `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => res.json())
            .then(data => this.context.setRide(data))
    }

    render() {
        const { id, starting, destination, time, date, capacity } = this.context.ride
        let dateStr = moment(date).format('MM/DD/YYYY');
        //Div#map for Maps container, styles in gmaps.css in component folder
        return (
            <>
                <div>
                    <h2>Ride Details</h2>
                    {/* <Gmaps /> */}
                    <div id="map"></div>
                    <span>Meetup Address: {starting}</span>
                    <br />
                    <span>Destination: {destination}</span>
                    <br />
                    <span>Meetup Time: {time}</span>
                    <br />
                    <span>Meetup Date: {dateStr}</span>
                    <br />
                    <span># of Seats: {capacity}</span>
                </div>
                <div>
                    <h6>Ride Description</h6>
                    <p>{this.context.ride.description}</p>
                </div>
                <div>
                    <button type="button" onClick={() => this.context.handleJoin(id)}>Join</button>
                    <button type="button" onClick={e => console.log('Ride Cancelled.')}>Delete Ride</button>
                    <button type="button" onClick={e => console.log('Ride Cancelled.')}>Cancel Ride</button>
                </div>
            </>
        )
    }
}
