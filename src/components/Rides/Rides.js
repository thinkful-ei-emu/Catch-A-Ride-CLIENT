import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRides } from '../../actions/rideActions';

class Rides extends Component {
    componentWillMount() {
        this.props.fetchRides();
    }

    render() {

        return (
            <div>
                <h2>Rides</h2>
            </div>
        )
    }
}

export default connect(null, { fetchRides })(Rides);