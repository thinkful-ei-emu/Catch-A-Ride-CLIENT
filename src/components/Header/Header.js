import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { GoogleLogout } from 'react-google-login';
import TokenService from '../../services/token-service';
import config from '../../config';
import UserContext from '../../context/UserContext';
import Logo from '../LoginPage/landing-logo.png';

class Header extends Component {
  static contextType = UserContext;

  logout = () => {
    TokenService.clearAuthToken();
    this.context.setLoggedOut();
  };

  renderNavBar() {
    return (
      <nav className='navbar'>
        <section className='header-item'>
          <img className='navlogo' src={Logo} />
        </section>
        <section className='header-links'>
          <Link className='navlink' to='/rides'>All Rides</Link>
          <Link className='navlink' to='/user-rides'>My Rides</Link>
          <Link className='navlink' to='/create-ride'>Create Ride</Link>
        </section>
        <section className='header-item'>
          <GoogleLogout
            className='google-button'
            clientId={config.CLIENT_ID}
            buttonText="Sign Out"
            onLogoutSuccess={this.logout}
          />
        </section>
      </nav>
    );
  }

  render() {
    return (
      <div className='frosted-glass'>
        {this.context.loggedIn && this.renderNavBar()}
      </div>
    );

  }
}


export default Header;
