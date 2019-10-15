import React, { Component } from 'react';
import Ride from '../../components/Ride/Ride';
import RideContext from '../../context/RideContext';
import RideSearchBar from '../../components/RideSearchBar/RideSearchBar';
import RideApiService from '../../services/RidesService/rides-driver-service';
import { Link } from 'react-router-dom';
import './Rides.css';

class Rides extends Component {
  static contextType = RideContext;

  componentDidMount() {
    const starting = this.context.starting;
    const destination = this.context.destination;
    RideApiService.getAllRides(starting, destination)
      .then(data => this.context.setRides(data))
      .catch(res => this.setState({error: res.error},
        () => {
          if (this.state.error === 'unauthorized request') this.props.userContext.setLoggedOut();
        }));
  }

  renderRidesList() {
    const ridePosts = this.context.rides.map((ride, i) => (
      <li className='single-ride' key={i}><Link to={`/rides/${ride.id}`}><Ride ride={ride} /></Link></li>
    ));
    return (
      <ul className='ridesList'>
        {ridePosts}
      </ul>
    );
  }

  render() {
    return (
      <>
        <h2>Rides</h2>
        <RideSearchBar />
        {this.renderRidesList()}
      </>
    );
  }
}


export default Rides;
