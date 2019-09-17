import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRides } from '../../actions/rideActions';
import Ride from '../Ride/Ride';

class Rides extends Component {
    componentWillMount() {
        this.props.fetchRides();
    }

    render() {

        return (
            <div>

                <Ride />
            </div>
        )
    }
}

export default connect(null, { fetchRides })(Rides);