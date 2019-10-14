import React, { Component } from 'react';
import RideContext from '../../context/RideContext';
import RideApiService from '../../services/RidesService/rides-driver-service';
import './SearchBox.css';
import UserContext from '../../context/UserContext';
import {Redirect} from 'react-router-dom';

export default class SearchBox extends Component {
  static contextType = RideContext;

  state = {
    error: null
  }

  //Handles get for rides filtered my destination and starting
  handleSubmit(e) {
    e.preventDefault();
    
    const starting = this.context.starting;
    const destination = this.context.destination;
    RideApiService.getAllRides(starting, destination)
      .then(data => this.context.setRides(data))
      .catch(res => this.setState({error: res.error}));
  }

  handleErrorClose = () => {
    this.setState({error: null});
  }

  render() {
    
    const { error } = this.state;
    return (
      <UserContext.Consumer>
        {userContext => {
          const { setLoggedOut } = userContext;
          if (error === 'unauthorized request') {
            setLoggedOut();
            // this.props.history.push('/');
            // return <Redirect to='/'/>;
          }
          return(
      <>
        {error && <div className='error'>{error}<button className='errButton' aria-label='close' onClick={() => this.handleErrorClose()}>X</button></div>}
        <form className='search-form' aria-label='Search for ride' onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor='start-input' className='search-start'>Starting: </label>
          <input id='start-input' placeholder="Enter City Name" aria-label='Starting location search input' value={this.context.starting} onChange={e => this.context.setStarting(e.target.value)} /><br />
          <label htmlFor='dest-input' className='search-dest'>Destination: </label>
          <input id='dest-input' placeholder="Enter City Name" aria-label='Destination search input' value={this.context.destination} onChange={e => this.context.setDestination(e.target.value)} /><br />
          <button className='search-submit' type="submit">Submit</button>
          
        </form>
      </>);
        }}</UserContext.Consumer>
    );
  }
}
