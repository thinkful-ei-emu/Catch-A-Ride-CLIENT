import React, { Component } from 'react';
import config from '../../config';
import RideContext from '../../context/RideContext';
import Gmaps from '../../components/Maps/Gmaps';
import moment from 'moment';
import TokenService from '../../services/token-service';
// import JoinRideButton from '../../components/JoinRideButton/JoinRideButton';
import PassengerApiService from '../../services/RidesService/rides-passenger-service';
import DriverApiService from '../../services/RidesService/rides-driver-service';
import './RideDetails.css';

export default class RideDetails extends Component {
    static contextType = RideContext;
    state = {
      error: null
    };

    componentDidMount() {
      fetch(`${config.API_ENDPOINT}/rides/${this.props.match.params.ride_id}`, {
        method: 'GET',
        headers: {
          Authorization: `bearer ${TokenService.getAuthToken()}`
        }
      })
        .then(res => res.json())
        .then(data => this.context.setRide(data));
    }

    handleJoin = (ride_id) => {
      PassengerApiService.passengerJoinRide(ride_id);
    }
    
    handleCancel = (ride_id) => {
      PassengerApiService.passengerCancelRide(ride_id);
    }

    handleDelete = (ride_id) => {
      this.context.deleteRide(ride_id);
      return DriverApiService.deleteRide(ride_id)
        .then(()=>{this.props.history.push('/rides');
        
        });
    }

    handleErrorClose = () => {
      this.setState({ error: null });
    }

    render() {
      const { error } = this.state;
      const { id, starting, destination, time, date, capacity } = this.context.ride;
      let dateStr = moment(date).format('MM/DD/YYYY');
      let timeStr = moment(time, 'HH:mm').format('h:mmA');
      //Div#map for Maps container, styles in gmaps.css in component folder
      return (
        <>
          <h2>Ride Details</h2>
          <div className="google-map">
            <Gmaps />
          </div>
          {error && <span className='errorBox'>{error}<button className='errorButton'>X</button></span>}
          <div className='ride-details'>
            <p>Meetup Address: {starting}</p>
            <p>Destination: {destination}</p>
            <p>Meetup Time: {timeStr}</p>
            <p>Meetup Date: {dateStr}</p>
            <p># of Seats: {capacity}</p>
            <h4>Ride Description:</h4>
            <p>{this.context.ride.description}</p>
            <button type="button" onClick={() => this.handleJoin(id)}>Join</button>
            <button type="button" onClick={() => this.handleDelete(id)}>Delete Ride</button>
            <button type="button" onClick={() => this.handleCancel(id)}>Cancel Ride</button>
          </div>
        </>
      );
    }
}
