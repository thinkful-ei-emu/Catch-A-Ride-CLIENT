import React from 'react';
import RidesService from '../../services/RidesService/rides-driver-service';
import './CreateRideForm.css';


// do we want a screen after submitting form that confirms that the ride was created?




export default class CreateRideForm1 extends React.Component {
  state = {
    created: null
  }



  grabValues = () => {

    let time = document.getElementById('timeinput').value;
    let date = document.getElementById('dateinput').value;
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
    console.log(body);
    RidesService.postNewRide(body)
      .then(() => this.setState({ created: true }));

  }

  render() {
    return (
      <>
        <h2>Create Ride</h2>
        <form className='newRideForm' onSubmit={this.SubmitForm}>
          <div>
            <label className='rideLabel createStart' htmlFor='starting'>Starting Point</label>
            <input placeholder="Enter Location You Leave From" id='starting' required></input>
          </div>
          <div>
            <label className='rideLabel createDest' htmlFor='destination'>Destination</label>
            <input placeholder="Enter Destination " id='destination' required></input>
          </div>
          <div>
            <label className='rideLabel createDate' htmlFor='dateinput' required>Date</label>
            <input type="date" id='dateinput'></input>
          </div>
          <div>
            <label className='rideLabel createTime' htmlFor='timeinput' required>Time</label>
            <input type="time" id='timeinput' defaultValue='12:00'></input>
          </div>
          <div>
            <label className='rideLabel createDesc' htmlFor='description'> Description</label>
            <input placeholder="Enter Details About vehicle and Individual needs for ride" id='description' required></input>
          </div>
          <div>
            <label className='rideLabel createSeat' htmlFor='capacity'># of Seats</label>
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
          {this.state.created === true ? 'Ride Created!' : ''}
        </form>
      </>
    );
  }
}
