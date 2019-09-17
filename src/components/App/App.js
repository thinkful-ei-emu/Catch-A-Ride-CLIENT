import React, { Component } from 'react';
import './App.css';

import Rides from '../Rides/Rides';
import Header from '../Header/Header';
import RideSearchBar from '../RideSearchBar/RideSearchBar';

import {Route, Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';
import CreateRideForm from '../RegistrationForm/CreateRideForm/CreateRideForm';

library.add(fas, faMapMarkedAlt)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RideSearchBar />
        <Route exact path='/' component={RegistrationForm}/>
        <Route path='/login'  component={LoginForm}/>
        <Route path='/rides'component={Rides} />
        <Route path='/createride' component={CreateRideForm}></Route>
      </div>
    )
  }
}

export default App;
