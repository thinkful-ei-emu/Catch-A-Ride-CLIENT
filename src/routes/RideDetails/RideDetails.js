import React, { Component } from 'react';
import config from '../../config';
import RideContext from '../../context/RideContext';
import Gmaps from '../../components/Maps/Gmaps';
import moment from 'moment';
import TokenService from '../../services/token-service';
import PassengerApiService from '../../services/RidesService/rides-passenger-service';
import DriverApiService from '../../services/RidesService/rides-driver-service';

export default class RideDetails extends Component {
  static contextType = RideContext;

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/rides/${this.props.match.params.ride_id}`, {
      method: 'GET',
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => res.json())
      .then(data => this.context.setRide(data))
      .then(() => {
        let startLat = this.context.ride.startCoorLat
        let startLng = this.context.ride.startCoorLong
        this.context.setStartingC(startLat, startLng);
        let destLat = this.context.ride.destCoorLat
        let destLng = this.context.ride.destCoorLong
        this.context.setDestinationC(destLat, destLng);
      });
  }

  handleJoin = (ride_id) => {
    PassengerApiService.passengerJoinRide(ride_id);
  }

  handleCancel = (ride_id) => {
    PassengerApiService.passengerCancelRide(ride_id);
  }

  handleDelete = (ride_id) => {
    DriverApiService.deleteRide(ride_id);
  }

  render() {
    const { id, starting, destination, time, date, capacity } = this.context.ride;
    let dateStr = moment(date).format('MM/DD/YYYY');

    console.log(this.context.startingC)
    //Div#map for Maps container, styles in gmaps.css in component folder
    return (
      <>
        <div>
          <h2>Ride Details</h2>
          <Gmaps />
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
          <button type="button" onClick={() => this.handleJoin(id)}>Join</button>
          <button type="button" onClick={() => this.handleDelete(id)}>Delete Ride</button>
          <button type="button" onClick={() => this.handleCancel(id)}>Cancel Ride</button>
        </div>
      </>
    );
  }
}
