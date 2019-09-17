import React, { Component } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';

export default class RideSearchBar extends Component {
    render() {
        return (
            <div>
                <label>Search by: </label>
                <FilterOptions />
                <SearchBox />
            </div>
        )
    }
}
