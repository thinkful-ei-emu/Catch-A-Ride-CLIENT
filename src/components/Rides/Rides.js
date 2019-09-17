import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ride from '../Ride/Ride';
import RideApiService from '../../services/ride-api-service';
import RideContext from '../../context/RideContext';
import RideSearchBar from '../RideSearchBar/RideSearchBar';
import './Rides.css';

class Rides extends Component {

    static contextType = RideContext;

    componentDidMount() {
        const starting = this.context.s
        RideApiService.getRides()
            .then(res => {
                this.context.setRides(res);
            })
    }

    renderRidesList() {
        const { searchTerm, filterOption } = this.context;
        // const list = this.context.rides.filter(ride => (ride.destination.includes(searchTerm)
        //     && (filterOption === 'destination'))).map((ride, key) => <li key={key}><Ride ride={ride} /></li>)
        const ridePosts = this.context.rides.map((ride, i) => (
            <li className='single-ride' key={i}><Ride ride={ride} /></li>
        ))
        return (
            <ul className='all-rides'>
                {ridePosts}
            </ul>
        )
    }

    render() {
        return (
            <>
                <div>Rides</div>
                <RideSearchBar />
                {this.renderRidesList()}
            </>
        )
    }
}
Rides.propTypes = {
    rides: PropTypes.array.isRequired
}

export default Rides;
