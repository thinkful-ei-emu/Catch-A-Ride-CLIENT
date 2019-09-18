import React, { Component } from 'react';
import RideContext from '../../context/RideContext';
import RideApiService from '../../services/ride-api-service';

export default class SearchBox extends Component {
    static contextType = RideContext;

    //Handles get for rides filtered my destination and starting
    handleSubmit(e) {
        e.preventDefault()
        console.log('Destination ', this.context.destination)
        console.log('Starting Location: ', this.context.starting)
        let destination = this.context.destination;
        let starting = this.context.starting;

        //Will used below when backend ready

        // return RideApiService.getRides(destination, starting)
        //     .then(res => res.json())
        //     .then(data => {
        //         this.context.setRides(data)
        //     })
    }


    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>Destination: </label>
                <input placeholder="123 Address St. New York, New York" value={this.context.destination} onChange={e => this.context.setDestination(e.target.value)} /><br />
                <label>Starting: </label>
                <input placeholder="123 Address St. New York, New York" value={this.context.starting} onChange={e => this.context.setStarting(e.target.value)} /><br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

