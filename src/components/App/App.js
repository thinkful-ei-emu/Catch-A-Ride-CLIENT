import React, { Component } from 'react';
import './App.css';
import LoginPage from '../LoginPage/LoginPage';

import Rides from '../Rides/Rides';
import Header from '../Header/Header';


import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

import CreateRideForm from '../../components/CreateRideForm/CreateRideForm';
import PrivateRoute from '../../Utils/PrivateRoute';
import PublicRoute from '../../Utils/PublicRoute';
import UserRides from '../UserRides/UserRides';
library.add(fas, faMapMarkedAlt);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PublicRoute exact path="/" component={LoginPage} />
        {/* <Route path="/login" component={LoginPage} /> */}
        <PrivateRoute path="/rides" component={Rides} />
        <PrivateRoute path="/createride" component={CreateRideForm}/>
        <PrivateRoute path='/user-rides' component={UserRides} />
      </div>
    );
  }
}

export default App;
