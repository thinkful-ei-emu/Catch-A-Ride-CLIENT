import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';

import LoginPage from '../LoginPage/LoginPage';
import Rides from '../../routes/Rides/Rides';
import Header from '../Header/Header';
import PrivateRoute from '../../Utils/PrivateRoute';
import PublicRoute from '../../Utils/PublicRoute';
import UserRides from '../UserRides/UserRides';
import CreateRideForm from '../../routes/CreateRideForm/CreateRideForm';
import RideDetails from '../../routes/RideDetails/RideDetails';
import TokenService from '../../services/token-service';
import config from '../../config';
import UserContext from '../../context/UserContext';
import Footer from '../Footer/Footer';
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute';

import './App.css';

class App extends Component {

  static contextType = UserContext;

  state = {
    time: Date.now(),
  }

  render() {
    if (this.state.time > Number(TokenService.getExpiresAt())) {
      TokenService.removeItems([config.TOKEN_KEY, 'user', 'expires_at']);
    }

    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <PublicRoute exact path="/" component={LoginPage} />
            <PrivateRoute exact path="/rides" component={Rides} />
            <PrivateRoute path="/create-ride" component={CreateRideForm} />
            <PrivateRoute path='/user-rides' component={UserRides} />
            <PrivateRoute path='/rides/:ride_id' component={RideDetails} />
            <Route component={NotFoundRoute} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
