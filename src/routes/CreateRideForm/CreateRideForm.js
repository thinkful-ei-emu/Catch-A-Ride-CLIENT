import React from 'react';
import RidesService from '../../services/RidesService/rides-driver-service';
import './CreateRideForm.css';
import { Redirect } from 'react-router-dom';

export default class CreateRideForm1 extends React.Component {
  state = {
    created: null,
    today: '',
    error: null
  }

  grabValues = () => {
    let time = document.getElementById('timeinput').value;
    let date = document.getElementById('today').value;
    let starting = document.getElementById('starting').value;
    let destination = document.getElementById('destination').value;
    let description = document.getElementById('description').value;
    let capacity = document.getElementById('capacity').value;
    return JSON.stringify({
      starting,
      destination,
      date,
      time,
      description,
      capacity
    });
  }

  SubmitForm = (e) => {
    e.preventDefault();
    let body = this.grabValues();
    RidesService.postNewRide(body)
      .then(res => this.setState({ created: true, ride_id: res.id }))
      .catch(res => this.setState({ error: res.error }, 
        () => {
          if (this.state.error === 'unauthorized request') this.props.userContext.setLoggedOut();
        }));
  }
  componentDidMount() {
    this.setState({ today: new Date().toISOString().substr(0, 10) });
  }

  handleErrorClose = () => {
    this.setState({ error: null });
  }

  render() {
    const { ride_id, error } = this.state;

    return this.state.created
      ? <Redirect to={`/rides/${ride_id}`} />
      : (
        <>
          <h2>Create Ride</h2>
          <form className='newRideForm' aria-label='Create a ride' onSubmit={this.SubmitForm}>
            {error && <div className='errorBox'>{error}<button className='errorButton' aria-label='close' onClick={() => this.handleErrorClose()}>X</button></div>}
            <div>
              <label className='rideLabel createStart' htmlFor='starting'>Starting Point</label><br />
              <input type='text' placeholder="Enter Location You Leave From" id='starting' aria-label='Starting location input' aria-required='true' required></input>
            </div>
            <div>
              <label className='rideLabel createDest' htmlFor='destination'>Destination</label><br />
              <input type='text' placeholder="Enter Destination " id='destination' aria-label='Destination input' aria-required='true' required></input>
            </div>
            <div>
              <label className='rideLabel createDate' htmlFor='today' >Date</label>
              <input type="date" id='today' defaultValue={this.state.today} aria-label='Date input' aria-required='true' required></input>
            </div>
            <div>
              <label className='rideLabel createTime' htmlFor='timeinput' >Time</label><br />
              <input type="time" id='timeinput' defaultValue='12:00' aria-label='Time input' aria-required='true' required></input>
            </div>
            <div>
              <label className='rideLabel createDesc' htmlFor='description'> Description</label><br />
              <textarea className='description' placeholder="Enter Details About vehicle and Individual needs for ride" id='description' aria-label='Description input' aria-required='true' required></textarea>
            </div>
            <div>
              <label className='rideLabel createSeat' htmlFor='capacity'># of Seats</label><br />
              <select className='rideSpace' id='capacity'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
            <button className='createRide' type='submit'>Share A Ride!</button>
          </form>
        </>
      );
  };
}
