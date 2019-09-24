import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import {GoogleLogout} from 'react-google-login';
import TokenService from '../../services/token-service';
import config from '../../config';
import UserContext from '../../context/UserContext';

class Header extends Component {
  static contextType = UserContext;

  logout = () => {
    TokenService.clearAuthToken();
    this.context.setLoggedOut();
    // console.log(this.props.history);
    // this.context.clearUser();
  };

  renderNavBar() {
    return (
      <nav className='navbar'>
        <Link className='navlink' to='/rides'>All Rides</Link>
        {' '}
        <Link className='navlink' to='/user-rides'>My Rides</Link>
        {' '}
        <Link className='navlink' to='/createride'>Create Ride</Link>
        {' '}
        <GoogleLogout
          className='google-button'
          clientId={config.CLIENT_ID}
          buttonText="Sign Out"
          onLogoutSuccess={this.logout}
        />
      </nav>
    );
  }

  render() {
    return (
        <>
          <h1>Catch-A-Ride</h1>
          {this.context.loggedIn ? this.renderNavBar() : '' }
        </>
    );
      
  }
}


export default Header;
