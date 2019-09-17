import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRides } from '../../actions/rideActions';
import Ride from '../Ride/Ride';
import './Rides.css';

class Rides extends Component {
    componentWillMount() {
        console.log('reducer')
        this.props.fetchRides();
    }

    render() {
        const ridePosts = this.props.rides.map(ride => (
            <Ride />
        ))
        return (
            <ul>
                {/* <h2>Rides</h2> */}
                {ridePosts}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    rides: state.rides.rides
})

export default connect(mapStateToProps, { fetchRides })(Rides);