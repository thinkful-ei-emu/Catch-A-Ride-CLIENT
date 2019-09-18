import React, { Component } from 'react';
import './App.css';

import Rides from '../Rides/Rides';
import Header from '../Header/Header';

import { Route, Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';
import CreateRideForm from '../CreateRideForm/CreateRideForm';

library.add(fas, faMapMarkedAlt);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' component={RegistrationForm} />
        <Route path='/login' component={LoginForm} />
        <Route path='/rides' component={Rides} />
        <Route path='/createride' component={CreateRideForm}></Route>
      </div>
    )
  }
}

export default App;