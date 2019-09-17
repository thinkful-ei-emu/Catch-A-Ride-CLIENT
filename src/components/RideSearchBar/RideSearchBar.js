import React, { Component } from 'react';
import SearchBox from '../SearchBox/SearchBox';

export default class RideSearchBar extends Component {
    render() {
        return (
            <div>
                <h4>Search For A Ride</h4>
                <SearchBox />
            </div>
        )
    }
}
