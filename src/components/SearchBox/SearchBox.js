import React, { Component } from 'react'

export default class SearchBox extends Component {
    render() {
        return (
            <div>
                <input placeholder="123 Address St. New York, New York" value={this.context.searchTerm} />
            </div>
        )
    }
}

