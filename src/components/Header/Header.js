import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <>
                <h1>Catch-A-Ride</h1>
                <nav className='navbar'>
                    {/* hardcoded right now, want to be dynamic based on page */}
                    {/* <h2>Rides</h2> */}
                    {/* need to change these link paths to go somewhere at some point */}
                    <Link to='/'>All Rides</Link>
                    {' '}
                    <Link to='/'>My Rides</Link>
                    {' '}
                    <Link to='/'>Logout</Link>
                </nav>
            </>
        )
    }
}

export default Header;
