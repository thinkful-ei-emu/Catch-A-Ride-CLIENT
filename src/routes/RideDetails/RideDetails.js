import React, { Component } from 'react';
import config from '../../config';
import RideContext from '../../context/RideContext';
import Gmaps from '../../components/Maps/Gmaps';
import TokenService from '../../services/token-service';
import PassengerApiService from '../../services/RidesService/rides-passenger-service';
import DriverApiService from '../../services/RidesService/rides-driver-service';
import './RideDetails.css';
import EditModal from '../../components/EditModal/EditModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faTrashAlt, faUserSlash, faEdit } from '@fortawesome/free-solid-svg-icons';


export default class RideDetails extends Component {
  static contextType = RideContext;
  static defaultProps = {
    userContext: {
      user: { user_id: '' }
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      message: null,
      isEditing: false,
      remainingSeats: 0,
    };
  }
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/rides/${this.props.match.params.ride_id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(data => this.context.setRide(data))
      .then(() => {
        let startLat = this.context.ride.startCoorLat;
        let startLng = this.context.ride.startCoorLong;
        this.context.setStartingC(startLat, startLng);
        let destLat = this.context.ride.destCoorLat;
        let destLng = this.context.ride.destCoorLong;
        this.context.setDestinationC(destLat, destLng);
        let remainingSeats = this.setRemainingSeats();
        this.setState({ remainingSeats });
      })
      .catch(res => this.setState({ error: res.error },
        () => {
          if (this.state.error === 'unauthorized request') this.props.userContext.setLoggedOut();
        }));
  }

  handleJoin = (ride_id) => {
    PassengerApiService.passengerJoinRide(ride_id)
      .then(res => {
        this.context.setRide(res);
        let remainingSeats = this.setRemainingSeats();
        this.setState({ message: 'You have joined this ride', remainingSeats });
      })
      .catch(res => this.setState({ error: res.error },
        () => {
          if (this.state.error === 'unauthorized request') this.props.userContext.setLoggedOut();
        }));
  }

  handleCancel = (ride_id) => {
    PassengerApiService.passengerCancelRide(ride_id)
      .then(res => {
        this.context.setRide(res);
        let remainingSeats = this.setRemainingSeats();
        this.setState({ message: 'You have left this ride', remainingSeats });
      })
      .catch(res => this.setState({ error: res.error },
        () => {
          if (this.state.error === 'unauthorized request') this.props.userContext.setLoggedOut();
        }));
  }

  handleDelete = (ride_id) => {
    this.context.deleteRide(ride_id);

    return DriverApiService.deleteRide(ride_id)
      .catch(res => (res.error)
        ? this.setState({
          error: res.error
        },
        () => {
          if (this.state.error === 'unauthorized request') this.props.userContext.setLoggedOut();
        })
        : this.props.history.push('/rides')
      );
  }

  handleErrorClose = () => {
    this.setState({ error: null });
  }

  handleMessageClose = () => {
    this.setState({ message: null });

  }
  createEditForm = () => {
    this.setState({ isEditing: true });
  }

  closeEditForm = () => {
    this.setState({ isEditing: false });
  }

  handleEditForm = () => {
    let ride_id = this.context.ride.id;
    let description = document.getElementById('newDescription').value;
    let starting = document.getElementById('newStarting').value;
    let destination = document.getElementById('newDestination').value;
    let date = document.getElementById('newDate').value;
    let time = document.getElementById('newTime').value;

    let updatedDetails = { starting, destination, description, date, time };
    DriverApiService.editRideDetails(ride_id, updatedDetails)
      .then(res => {
        this.context.setRide(res);

        let startLat = this.context.ride.startCoorLat;
        let startLng = this.context.ride.startCoorLong;
        this.context.setStartingC(startLat, startLng);
        let destLat = this.context.ride.destCoorLat;
        let destLng = this.context.ride.destCoorLong;
        this.context.setDestinationC(destLat, destLng);
        this.setState({ isEditing: false });
      })
      .catch(res => this.setState({ error: res.error },
        () => {
          if (this.state.error === 'unauthorized request') this.props.userContext.setLoggedOut();
        }));
  }

  setRemainingSeats = () => {
    let remainingSeats = 0;
    let count = 0;

    let sRArray = Object.keys(this.context.ride);

    for (let i = 6; i < this.context.ride.capacity + 6; i++) {
      count++;
      if (this.context.ride.capacity < count) {
        break;
      }

      if (this.context.ride[sRArray[i]] === null) {
        remainingSeats++;
      }
    }

    if (remainingSeats === 0) {
      return remainingSeats = 'This ride is full';
    }
    else {
      return remainingSeats;
    }
  }

  render() {
    const { error, message, remainingSeats } = this.state;
    const { id, starting, destination, date_time, driver_name, } = this.context.ride;
    let dateStr = new Date(date_time).toLocaleString(undefined, { timeZone: 'UTC' }); let newStr = dateStr.split(', ');
    let dateFormat = newStr[0];
    let time = newStr[1];
    let timeFormat = '';
    if (!time) {
      timeFormat = 'Invalid Date';
    } else {
      let timeArr = time.split(':');
      let amPM = timeArr[2].split(' ');
      timeFormat = `${timeArr[0]}:${timeArr[1]} ${amPM[1]}`;

    }

    const { user_id } = this.props.userContext.user;

    return this.context.ride
      ? <>
        <h2>Ride Details</h2>
        <div className="google-map">
          <Gmaps />
        </div>
        {message && <div className='messageBox'>{message}<button className='messageButton' aria-label='close' onClick={() => this.handleMessageClose()}>X</button></div>}
        {error && <div className='errorBox'>{error}<button className='errorButton' aria-label='close' onClick={() => this.handleErrorClose()}>X</button></div>}
        <div className='ride-details'>
          <p>Driver: {driver_name}</p>
          <p>Meetup Address: {starting}</p>
          <p>Destination: {destination}</p>
          <p>Meetup Date: {dateFormat}</p>
          <p>Meetup Time: {timeFormat}</p>
          <p>Remaining Seats: {remainingSeats}</p>
          <h4>Ride Description:</h4>
          <p>{this.context.ride.description}</p>
          <div id="ride-btn">
            {this.context.ride.driver_id === user_id
              ? <>
                <button type="button" onClick={() => this.handleDelete(id)}>Delete Ride <FontAwesomeIcon icon={faTrashAlt} /></button>
                <button type="button" onClick={() => this.createEditForm()}>Edit Details <FontAwesomeIcon icon={faEdit} /></button>
              </>
              : <>
                <button type="button" onClick={() => this.handleJoin(id)}>Join <FontAwesomeIcon icon={faMapMarkedAlt} /></button>
                <button type="button" onClick={() => this.handleCancel(id)}>Cancel Ride <FontAwesomeIcon icon={faUserSlash} /></button>
              </>}
            {this.state.isEditing && <EditModal handleEditForm={this.handleEditForm} closeEditForm={this.closeEditForm} timeFormat={timeFormat} dateFormat={dateFormat} />}
          </div>
        </div>
      </>
      : <div>Loading</div>;
  }
}
