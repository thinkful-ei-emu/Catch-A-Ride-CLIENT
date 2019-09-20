import React, { Component } from 'react';
import './App.css';
import LoginPage from '../LoginPage/LoginPage';

import Rides from '../../routes/Rides/Rides';
import Header from '../Header/Header';
import RideContext from '../../context/RideContext';

import { Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import RegistrationForm from '../../routes/RegistrationForm/RegistrationForm';
import LoginForm from '../../routes/LoginForm/LoginForm';
import CreateRideForm from '../../routes/CreateRideForm/CreateRideForm';
import RideDetails from '../../routes/RideDetails/RideDetails';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

import CreateRideForm from '../../components/CreateRideForm/CreateRideForm';
import PrivateRoute from '../../Utils/PrivateRoute';
import PublicRoute from '../../Utils/PublicRoute';
import UserRides from '../UserRides/UserRides';
library.add(fas, faMapMarkedAlt);

class App extends Component {
  static contextType = RideContext;
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <PublicRoute exact path="/" component={LoginPage} />
          {/* <Route path="/login" component={LoginPage} /> */}
          <PrivateRoute path="/rides" component={Rides} />
          <PrivateRoute path="/createride" component={CreateRideForm} />
          <PrivateRoute path='/user-rides' component={UserRides} />
          <PrivateRoute path='/rides/:ride_id' render={({ match }) => <RideDetails match={match} rides={this.context.rides.find((ride) => {
            return ride.id === match.params.ride_id
          })} />} />
        </Switch>
      </div >
    );
  }
}

export default App;
