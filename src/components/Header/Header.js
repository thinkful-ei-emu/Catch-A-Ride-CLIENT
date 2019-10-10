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

  constructor(props) {
    super(props);
  
    this.state = {
      sideNavOpen: false
    };
  }

  openSideNav = () => {
    // console.log('open');
    // document.getElementById('sideNav').style.width = '200px';
    this.setState({
      sideNavOpen: true
    });
  }

  closeSideNav = () => {
    // document.getElementById('sideNav').style.width = '0';
    this.setState({
      sideNavOpen: false
    });
  }

  logout = () => {
    TokenService.clearAuthToken();
    this.context.setLoggedOut();
  };

  renderNavBar() {
    return <>
      <nav className='navbar'>
        <section className='header-item'>
          <img className='navlogo' src={Logo} alt="Catch A Ride Logo" />
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
            render={() => (
              <Link to='/'>
                <button className='navlink logout-button' onClick={this.logout}>
                  Sign Out
                </button>
              </Link>
            )}
          />
        </section>
      </nav>

      <div className='top-nav'>
        <div className='navbar-content'>
          {this.context.loggedIn &&
            <span className='hamburger' onClick={() => this.openSideNav()}>
              <div className='hamburger-bar'></div>
              <div className='hamburger-bar'></div>
              <div className='hamburger-bar'></div>
            </span>}
          <h3 className='navbar-header'>Catch-A-Ride</h3>
        </div>
      </div>

      <nav id='sideNav' className={'side-nav frosted-glass ' + (this.state.sideNavOpen && 'nav-open')}>
        <span className='nav-close' onClick={() => this.closeSideNav()}>
          <button id='closeBtn' className='closeBtn' >&times;</button>
        </span>
        <Link to={'/rides'}>
          <button id='rides' className='nav-link' onClick={() => this.closeSideNav()}>Find Ride</button>
        </Link>
        <Link to={'/user-rides'}>
          <button id='user-rides' className='nav-link' onClick={() => this.closeSideNav()}>My Rides</button>
        </Link>
        <Link to={'/create-ride'}>
          <button id='create-ride' className='nav-link' onClick={() => this.closeSideNav()}>Create Ride</button>
        </Link>
        <Link to={'/'}>
          <GoogleLogout
            className='google-button'
            clientId={config.CLIENT_ID}
            buttonText="Sign Out"
            onLogoutSuccess={this.logout}
            render={() => (
              <button id='logout' className='nav-link' onClick={() => {
                this.closeSideNav();
                this.logout();
              }}>Logout</button>
            )}
          />
        </Link>
      </nav>

    </>;
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
