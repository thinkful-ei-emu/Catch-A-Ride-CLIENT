import React, { Component } from 'react';
import RideContext from '../../context/RideContext';

export default class SearchBox extends Component {
    static contextType = RideContext;

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.context.searchTerm)
        console.log('Filter by: ', this.context.filterOption);
    }


    render() {
        //this.context.setSearchTerm()
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input placeholder="123 Address St. New York, New York" value={this.context.searchTerm} onChange={e => this.context.setSearchTerm(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

