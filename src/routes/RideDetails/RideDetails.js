import React, { Component } from 'react'
import config from '../../config'
import RideContext from '../../context/RideContext';

export default class RideDetails extends Component {
    // console.log(this.props.match.params.ride_id)
    // console.log(props)
    static contextType = RideContext;

    componentDidMount() {
        console.log(this.props.match.params.ride_id);
        fetch(`${config.API_ENDPOINT}/rides/${this.props.match.params.ride_id}`)
            .then(res => res.json())
            .then(data => this.context.setRide(data))
    }

    render() {
        console.log(this.context.ride)
        return (
            <>
                <div>
                    <h2>Ride Details</h2>
                    <span>Meetup Address: {this.context.ride.starting}</span>
                    <br />
                    <span>Meetup Time: {this.context.ride.time}</span>
                    <br />
                    <span>Meetup Date: {this.context.ride.date}</span>
                    <br />
                    <span># of Seats: {this.context.ride.date}</span>
                </div>
                <div>
                    <h6>Ride Description</h6>
                    <p>{this.context.ride.description}</p>
                </div>
                <div>
                    <button onClick={e => console.log('Ride Cancelled.')}>Cancel Ride</button>
                </div>
            </>
        )
    }
}
