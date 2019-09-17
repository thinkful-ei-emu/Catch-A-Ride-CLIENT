import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default class JoinRideButton extends Component {
    render() {
        return (
            <div>
                <button type="submit"><FontAwesomeIcon icon='map-marked-alt' /></button>
            </div>
        )
    }
}
