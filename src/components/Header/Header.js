import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Catch-A-Ride</h1>
        <nav className='navbar'>
          {/* hardcoded right now, want to be dynamic based on page */}
          {/* <h2>Rides</h2> */}
          <Link className='navlink' to='/rides'>All Rides</Link>
          {/* {' '} */}
          {/* <Link to='/'>My Rides</Link> */}
          {' '}
          <Link className='navlink' to='/createride'>Create Ride</Link>
          {' '}
          <Link className='navlink' to='/'>Logout</Link>
        </nav>
      </header>
    )
  }
}

export default Header;
