import React, { Component } from 'react';

const RideContext = React.createContext({
    rides: [],
    ride: {},
    error: null,
    searchTerm: '',
    filterOption: 'All',
    setRides: () => { },
    setRide: () => { },
    setSearchTerm: () => { },
    setFilterOption: () => { }
})

export default RideContext;

export class RideProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rides: [],
            ride: {},
            searchTerm: '',
            filterOption: 'All'
        }
    }

    setRides = (rides) => {
        this.setState({ rides })
    }

    setRide = (ride) => {
        this.setState({ ride })
    }

    setSearchTerm = (searchTerm) => {
        this.setState({ searchTerm })
    }

    setFilterOption = (filterOption) => {
        this.setState({ filterOption })
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
            searchTerm: this.state.searchTerm,
            filterOption: this.state.filterOption,
            setRides: this.setRides,
            setRide: this.setRide,
            setSearchTerm: this.setSearchTerm,
            setFilterOption: this.setFilterOption
        }
        return (
            <RideContext.Provider value={value}>
                {this.props.children}
            </RideContext.Provider>
        )
    }
}