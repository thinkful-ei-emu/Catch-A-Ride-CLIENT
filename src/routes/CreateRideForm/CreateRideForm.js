import React from 'react';
import {Link} from 'react-router-dom';
import RidesService from '../../services/RidesService/rides-driver-service';
// import RideContext from '../../context/RideContext';
import './CreateRideForm.css';
import {Redirect} from 'react-router-dom';

export default class CreateRideForm1 extends React.Component {
  // static contextType = RideContext;

  state = {
    created: null,
    today: ''
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
      .then(res => this.setState({ created: true, ride_id: res.id }));

  }
  componentDidMount(){
    this.setState({today: new Date().toISOString().substr(0, 10)});
  }

  render() {
    const {ride_id} = this.state;
    if (this.state.created===true){
      return <Redirect to={`/rides/${ride_id}`} />;
    }
    return (
      <>
        <h2>Create Ride</h2>
        <form className='newRideForm' onSubmit={this.SubmitForm}>
          <div>
            <label className='rideLabel createStart' htmlFor='starting'>Starting Point</label><br/>
            <input placeholder="Enter Location You Leave From" id='starting' required></input>
          </div>
          <div>
            <label className='rideLabel createDest' htmlFor='destination'>Destination</label><br/>
            <input placeholder="Enter Destination " id='destination' required></input>
          </div>
          <div>
            <label className='rideLabel createDate' htmlFor='today' required>Date</label>
            <input type="date" id='today' defaultValue={this.state.today}></input>
          </div>
          <div>
            <label className='rideLabel createTime' htmlFor='timeinput' required>Time</label><br/>
            <input type="time" id='timeinput' defaultValue='12:00'></input>
          </div>
          <div>
            <label className='rideLabel createDesc' htmlFor='description'> Description</label><br/>
            <textarea className='description' placeholder="Enter Details About vehicle and Individual needs for ride" id='description' required></textarea>
          </div>
          <div>
            <label className='rideLabel createSeat' htmlFor='capacity'># of Seats</label><br/>
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
          {/* <br/> */}
          <button className='createRide' type='submit'>Share A Ride!</button>
        </form>
      </>
    );
  }
}
