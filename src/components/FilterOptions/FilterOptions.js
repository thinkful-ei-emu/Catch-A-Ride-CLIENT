import React, { Component } from 'react'
import Select from 'react-select';
import RideContext from '../../context/RideContext';

export default class FilterOptions extends Component {
    static contextType = RideContext;

    handleChange = (selectedOption) => {
        this.context.setFilterOption(selectedOption.value);
    }

    render() {
        const options = [
            { value: 'destination', label: 'Destination' },
            { value: 'meetup', label: 'Meetup' },
            { value: 'compensation', label: 'Compensation' }
        ];
        return (
            <div>
                <Select options={options} onChange={this.handleChange} />
            </div>
        )
    }
}
