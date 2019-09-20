import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RideApiService from '../../services/RidesService/rides-passenger-service';
import RideContext from '../../context/RideContext';

export default class JoinRideButton extends Component {
    //body must include ride id
    static contextType = RideContext

    render() {
        return (
            <div>
                <button type="button" onClick={this.context.handleJoin(this.props.rideId)}><FontAwesomeIcon icon='map-marked-alt' /></button>
            </div>
        )
    }
}
