import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import {GoogleLogout} from 'react-google-login';
import TokenService from '../../services/token-service';
import config from '../../config';
import UserContext from '../../context/UserContext';
import Logo from './Catch-logo.png';

class Header extends Component {
  static contextType = UserContext;

  logout = () => {
    TokenService.clearAuthToken();
    this.context.setLoggedOut();
  };

  renderNavBar() {
    return (
      <>
      <h1>
        {/* <img className='logo' src="https://img.icons8.com/wired/64/000000/fiat-500.png"></img> */}
        {/* Catch-A-Ride */}
        <img src={Logo}/>
      </h1>
      <nav className='navbar'>
        <Link className='navlink' to='/rides'>All Rides</Link>
        {' '}
        <Link className='navlink' to='/user-rides'>My Rides</Link>
        {' '}
        <Link className='navlink' to='/create-ride'>Create Ride</Link>
        {' '}
        <GoogleLogout
          className='google-button'
          clientId={config.CLIENT_ID}
          buttonText="Sign Out"
          onLogoutSuccess={this.logout}
        />
      </nav>
      </>
    );
  }

  render() {
    return (
        <>
          
          {this.context.loggedIn ? this.renderNavBar() : '' }
        </>
    );
      
  }
}


export default Header;
