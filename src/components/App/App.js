import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';

import LoginPage from '../LoginPage/LoginPage';
import Rides from '../../routes/Rides/Rides';
import Header from '../Header/Header';
import PrivateRoute from '../../Utils/PrivateRoute';
import PublicRoute from '../../Utils/PublicRoute';
import UserRides from '../UserRides/UserRides';
import CreateRideForm from '../../routes/CreateRideForm/CreateRideForm';
import RideDetails from '../../routes/RideDetails/RideDetails';
// import UserContext from '../../context/UserContext';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

import './App.css';

library.add(fas, faMapMarkedAlt);

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <PublicRoute exact path="/" component={LoginPage} />
            <PrivateRoute exact path="/rides" component={Rides} />
            <PrivateRoute path="/createride" component={CreateRideForm} />
            <PrivateRoute path='/user-rides' component={UserRides} />
            <PrivateRoute path='/rides/:ride_id' component={RideDetails} />
          </Switch>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
