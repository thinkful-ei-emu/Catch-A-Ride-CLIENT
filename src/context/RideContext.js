import React, { Component } from 'react';

const RideContext = React.createContext({
    rides: [],
    ride: {},
    error: null,
    setRides: () => { },
    setRide: () => { }
})

export default RideContext;

export class RideProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rides: [],
            ride: {}
        }
    }

    setRides = (rides) => {
        this.setState({ rides })
    }

    setRide = (ride) => {
        this.setState({ ride })
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
            setRides: this.setRides,
            setRide: this.setRide
        }
        return (
            <RideContext.Provider value={value}>
                {this.props.children}
            </RideContext.Provider>
        )
    }
}