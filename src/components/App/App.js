import React, { Component } from 'react';
import './App.css';

import Rides from '../../routes/Rides/Rides';
import Header from '../Header/Header';
import RideContext from '../../context/RideContext';

import { Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import RegistrationForm from '../../routes/RegistrationForm/RegistrationForm';
import LoginForm from '../../routes/LoginForm/LoginForm';
import CreateRideForm from '../../routes/CreateRideForm/CreateRideForm';
import RideDetails from '../../routes/RideDetails/RideDetails';

library.add(fas, faMapMarkedAlt);

class App extends Component {
  static contextType = RideContext;
  render() {
    console.log(this.context.rides)
    return (
      <div className="App">
        <Header />
        <Route exact path='/' component={RegistrationForm} />
        <Route path='/login' component={LoginForm} />
        <Route exact path='/rides' component={Rides} />
        <Route path='/createride' component={CreateRideForm}></Route>
        <Route path='/rides/:ride_id' render={({ match }) => <RideDetails match={match} rides={this.context.rides.find((ride) => {
          // console.log(match.params.ride_id)
          // console.log(this.context.rides)
          return ride.id === match.params.ride_id
        })} />} />
      </div>
    )
  }
}

export default App;