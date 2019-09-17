import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import{Route,Link} from 'react-router-dom';
import Rides from '../Rides/Rides'
import Header from '../Header/Header';
import store from '../../store';
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
      <Provider store={store}>
        <div className="App">
          <Header />
          <Route exact path='/' component={RegistrationForm}/>
          <Route path='/login'  component={LoginForm}/>
          <Route path='/rides'component={Rides} />
          <Route path='/createride' component={CreateRideForm}></Route>
        </div>
      </Provider>
    )
  }
}

export default App;
