import React, { Component, useContext } from 'react';
import config from '../../config';
import RideContext from '../../context/RideContext';
import UserContext from '../../context/UserContext';
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
      error: null,
      message: null
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
      PassengerApiService.passengerJoinRide(ride_id)
        .then(() => this.setState({ message: 'You have joined this ride' }))
        .catch(res => this.setState({error: res.error}));
    }
    
    handleCancel = (ride_id) => {
      // if the user is part of this ride set message in state to say 'You have left this ride' 
      PassengerApiService.passengerCancelRide(ride_id)
        .catch(res => this.setState({error: res.error}));       
    }

    handleDelete = (ride_id) => {
      this.context.deleteRide(ride_id);

      return DriverApiService.deleteRide(ride_id)
        .catch(res => (res.error) ? this.setState({error: res.error}) : this.props.history.push('/rides')
        );
    }

    handleErrorClose = () => {
      this.setState({ error: null });
    }

    handleMessageClose = () => {
      this.setState({ message: null});
    }

    // renderButtons = () => {
    // if userId matches the driver id is the comparison we want to use, need to figure out how to use usercontext here as well, will also fix navbar/rerendering issues
    //   console.log('button');
    //   // passenger buttons
    //   // <button type="button" onClick={() => this.handleJoin(id)}>Join</button>
    //   // <button type="button" onClick={() => this.handleCancel(id)}>Cancel Ride</button>

    //   // driver button
    //   // <button type="button" onClick={() => this.handleDelete(id)}>Delete Ride</button>
     
    // }

    render() {
      const { error, message } = this.state;
      const { id, starting, destination, time, date, capacity, driver_name } = this.context.ride;
      let dateStr = moment(date).format('MM/DD/YYYY,h:mmA');
      let newStr = dateStr.split(',');
      let dateFormat = newStr[0];
      let timeFormat = newStr[1];
      console.log(message);
      //Div#map for Maps container, styles in gmaps.css in component folder
      if(!this.context.ride) {
        return <div>Loading</div>;
      } else {
        return ( 
          <UserContext.Consumer>{(userContext) => {
            const {user_id} = userContext.user;
            return (
              <>
                <h2>Ride Details</h2>
                <div className="google-map">
                  <Gmaps />
                </div>
                {message && <span>{message}<button className='messageButton' aria-label='close' onClick={() => this.handleMessageClose()}>X</button></span>}
                {error && <span className='errorBox'>{error}<button className='errorButton' aria-label='close' onClick={() => this.handleErrorClose()}>X</button></span>}
                <div className='ride-details'>
                  <p>Driver: {driver_name}</p>
                  <p>Meetup Address: {starting}</p>
                  <p>Destination: {destination}</p>
                  <p>Meetup Date: {dateFormat}</p>
                  <p>Meetup Time: {timeFormat}</p>
                  <p># of Seats: {capacity}</p>
                  <h4>Ride Description:</h4>
                  <p>{this.context.ride.description}</p>
                  {this.context.ride.driver_id === user_id 
                    ? <button type="button" onClick={() => this.handleDelete(id)}>Delete Ride</button> 
                    : <><button type="button" onClick={() => this.handleJoin(id)}>Join</button>
                      <button type="button" onClick={() => this.handleCancel(id)}>Cancel Ride</button></> }
                  
                </div>
              </>
            ); 
          }}
          </UserContext.Consumer>
        );
      }
    }
}
