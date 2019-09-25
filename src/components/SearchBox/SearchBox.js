import React, { Component } from 'react';
import RideContext from '../../context/RideContext';
import RideApiService from '../../services/RidesService/rides-driver-service';
import './SearchBox.css';

export default class SearchBox extends Component {
  static contextType = RideContext;

  state = {
    error: null
  }

  //Handles get for rides filtered my destination and starting
  handleSubmit(e) {
    e.preventDefault();
    // console.log('Destination ', this.context.destination)
    // console.log('Starting Location: ', this.context.starting.length);
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
      <>
        {error && <div className='error'>{error}<button className='errButton' aria-label='close' onClick={() => this.handleErrorClose()}>X</button></div>}
        <form className='search-form' onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor='start-input' className='search-start'>Starting: </label>
          <input id='start-input' placeholder="123 Address St. New York, New York" value={this.context.starting} onChange={e => this.context.setStarting(e.target.value)} /><br />
          <label htmlFor='dest-input' className='search-dest'>Destination: </label>
          <input id='dest-input' placeholder="123 Address St. New York, New York" value={this.context.destination} onChange={e => this.context.setDestination(e.target.value)} /><br />
          <button className='search-submit' type="submit">Submit</button>
        </form>
      </>
    );
  }
}
