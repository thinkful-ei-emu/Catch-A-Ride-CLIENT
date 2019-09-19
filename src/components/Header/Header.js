import React, { Component } from 'react';
import {Link,/*Redirect*/} from 'react-router-dom';
import './Header.css';
import {GoogleLogout} from 'react-google-login';
import TokenService from '../../services/token-service';
import config from '../../config';

class Header extends Component {
    state={
      loggedIn:true
    }
    
    logout = () => {
      this.setState({loggedIn:false});
        
      TokenService.clearAuthToken();
      window.location.reload();
      
    
      console.log('Signed Out.');
    };

    render() {
      return (
            <>
                <h1>Catch-A-Ride</h1>
                <nav className='navbar'>
                  {/* hardcoded right now, want to be dynamic based on page */}
                  {/* <h2>Rides</h2> */}
                  <Link className='navlink' to='/rides'>All Rides</Link>
                  {' '}
                  <Link className='navLink' to='/user-rides'>My Rides</Link>
                  {' '}
                  <Link className='navlink' to='/createride'>Create Ride</Link>
                  {' '}
                  {/* <Link className='navlink' to='/'>Logout</Link> */}
                  <GoogleLogout
                    clientId={config.CLIENT_ID}
                    buttonText="Sign Out"
                    onLogoutSuccess={this.logout}
                  />
                </nav>
            </>
      );
      
    }
}


export default Header;
