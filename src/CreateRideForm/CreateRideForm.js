import React from 'react';
import RidesService from '../services/RidesService/rides-driver-service';





export default class CreateRideForm1 extends React.Component {



  //Grabs input values on the form
  grabValues=()=>{
  
    let time=document.getElementById('timeinput').value+':00';
    let date=document.getElementById('dateinput').value;
    let starting=document.getElementById('starting').value;
    let destination=document.getElementById('destination').value;
    let description=document.getElementById('description').value;
    let capacity=document.getElementById('capacity').value;
    

    return {
      starting,
      destination,
      date,
      time,
      description,
      capacity
    };


  }
  //Takes values from input form and puts them into an api call to the server.
  SubmitForm=(e)=>{
    e.preventDefault();
    let body=this.grabValues();
    console.log(body);
  //  RidesService.postNewRide(body);
  }
  render() {
    return (
      <section>
        <h2>Create Ride</h2>
        <form className="" onSubmit={this.SubmitForm}>
          <label>Starting Location</label>
          <input placeholder="Enter Location You Leave From" id='starting'required></input>
          <label>Destination</label>
          <input placeholder="Enter Destination " id='destination'required></input>
          <label>Date:</label>
          <input type="date" id='dateinput'required></input>
          <label>Time</label>
          <input type="time" id='timeinput' defaultValue='12:00'required></input>
          <label>Type:</label>
          <label> Description</label>
          <input placeholder="Enter Details About vehicle and Individual needs for ride" id='description'required></input>
          <label># of Seats</label>
          <select id='capacity'required>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
          <button type='submit'>Share a Ride!</button>
        </form>
      </section>
    );
  }
}
