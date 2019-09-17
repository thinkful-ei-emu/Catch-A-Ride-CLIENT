import React from "react";
import RidesService from '../services/RidesService/rides-service'





export default class CreateRideForm extends React.Component {


  checkDate(e){
    e.preventDefault();

  let tdate=document.getElementById('dateinput').value
   
  console.log(tdate)
  }
  checkTime(e){
    e.preventDefault();

    let time= document.getElementById('timeinput').value+':00';
    console.log(time)
  }

  grabValues(e){
    e.preventDefault();
    let time=document.getElementById('timeinput').value+':00'
    let date=document.getElementById('dateinput').value
    let starting=document.getElementById('starting').value
    let destination=document.getElementById('destination').value
    let description=document.getAnimations('description').value
    let capacity=document.getElementById('capacity').value

    return {
      starting,
      destination,
      date,
      time,
      description,
      capacity
          }


  }

  testrun=()=>{
    console.log('tests ')
    console.log(this.grabValues());
  }
  render() {
    return (
      <section>
        <h2>Create Ride</h2>
        <form className="" onSubmit={this.testrun}>
          <label>Starting Location</label>
          <input placeholder="Enter Location You Leave From" id='starting'></input>
          <label>Destination</label>
          <input placeholder="Enter Destination " id='destination'></input>
          <label>Date:</label>
          <input type="date" id='dateinput'></input>
          <label>Time</label>
          <input type="time" id='timeinput'></input>
          <label>Type:</label>
          <label> Description</label>
          <input placeholder="Enter Details About vehicle and Individual needs for ride" id='description'></input>
          <label># of Seats</label>
          <select id='capacity'>
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
