import React from "react";





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
  render() {
    return (
      <section>
        <h2>Create Ride</h2>
        <form className="">
          <label>Starting Location</label>
          <input placeholder="Enter Location You Leave From"></input>
          <label>Destination</label>
          <input placeholder="Enter Destination "></input>
          <label>Date:</label>
          <input type="date" id='dateinput'></input>
          <label>Time</label>
          <input type="time" id='timeinput'></input>
          <label>Type:</label>
          <label> Description</label>
          <input placeholder="Enter Details About vehicle and Individual needs for ride"></input>
          <label># of Seats</label>
          <select>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
          <button onClick={this.checkTime}>Share a Ride!</button>
        </form>
      </section>
    );
  }
}
