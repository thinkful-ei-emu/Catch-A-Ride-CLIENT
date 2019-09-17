import React, { Component } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';
import './RideSearchBar.css';

export default class RideSearchBar extends Component {
    render() {
        return (
            <div className='searchbar'>
                <label>Search by: </label>
                <FilterOptions />
                <SearchBox />
            </div>
        )
    }
}
