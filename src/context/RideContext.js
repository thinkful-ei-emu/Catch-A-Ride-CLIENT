import React, { Component } from 'react';

const RideContext = React.createContext({
    rides: [],
    ride: {},
    error: null,
    destination: '',
    starting: '',
    setRides: () => { },
    setRide: () => { },
    setDestination: () => { },
    setStarting: () => { }
})

export default RideContext;

export class RideProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rides: [],
            ride: {},
            destination: '',
            starting: ''
        }
    }

    setRides = (rides) => {
        this.setState({ rides })
    }

    setRide = (ride) => {
        this.setState({ ride })
    }

    setDestination = (destination) => {
        this.setState({ destination })
    }

    setStarting = (starting) => {
        this.setState({ starting })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }


    render() {
        const value = {
            rides: this.state.rides,
            ride: this.state.ride,
            destination: this.state.destination,
            starting: this.state.starting,
            setRides: this.setRides,
            setRide: this.setRide,
            setDestination: this.setDestination,
            setStarting: this.setStarting
        }
        return (
            <RideContext.Provider value={value}>
                {this.props.children}
            </RideContext.Provider>
        )
    }
}