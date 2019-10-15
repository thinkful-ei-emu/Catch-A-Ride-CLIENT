import React, { Component } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import UserContext from '../../context/UserContext';
import './RideSearchBar.css';

export default class RideSearchBar extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div className='searchbar '>
        <h3>Search For Rides</h3>
        <SearchBox userContext={this.context} />
      </div>
    );
  }
}

