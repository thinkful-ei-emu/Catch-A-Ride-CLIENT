import React, { Component } from 'react';
import config from '../../config';
import RideContext from '../../context/RideContext';
import Gmaps from '../../components/Maps/Gmaps';
import moment from 'moment';
import TokenService from '../../services/token-service';
import JoinRideButton from '../../components/JoinRideButton/JoinRideButton';
import PassengerApiService from '../../services/RidesService/rides-passenger-service';
import DriverApiService from '../../services/RidesService/rides-driver-service';
import RidesVoteService from '../../services/RidesService/rides-vote-service';

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
        
        })}

      handleUpVote=(driverId,rideId)=>{
        RidesVoteService.postUpVote(driverId,rideId);
      }
      handleDownVote=(driverId,rideId)=>{
        RidesVoteService.postDownVote(driverId,rideId);
      };
        

    

    render() {
      const { id, starting, destination, time, date, capacity,driver_id } = this.context.ride;
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
                  <button type="button" onClick={() => this.handleJoin(id)}>Join</button>
                  <button type="button" onClick={() => this.handleDelete(id)}>Delete Ride</button>
                  <button type="button" onClick={() => this.handleCancel(id)}>Cancel Ride</button>
                  <button type="button" onClick={() => console.log(this.context.ride)}>Check</button>
                  <button type="button" onClick={() => this.handleUpVote(driver_id,id)}>&uarr;</button>
                  <button type="button" onClick={() => this.handleDownVote(driver_id,id)}>&darr;</button>

                </div>
            </>
      );
    }
}
