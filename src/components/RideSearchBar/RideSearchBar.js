import React, { Component } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import './RideSearchBar.css';

export default class RideSearchBar extends Component {
    render() {
        return (
            <div className='searchbar'>
                <h3>Search For Rides</h3>
                <SearchBox />
            </div>
        )
    }
}