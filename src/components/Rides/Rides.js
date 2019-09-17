import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRides } from '../../actions/rideActions';
import Ride from '../Ride/Ride';

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
            <div>
                <div>Rides</div>
                {ridePosts}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    rides: state.rides.rides
})

export default connect(mapStateToProps, { fetchRides })(Rides);