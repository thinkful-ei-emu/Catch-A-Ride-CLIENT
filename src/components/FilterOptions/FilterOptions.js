import React, { Component } from 'react'
import Select from 'react-select';
import RideContext from '../../context/RideContext';

export default class FilterOptions extends Component {

    render() {
        const options = [
            { value: 'destination', label: 'Destination' },
            { value: 'meetup', label: 'Meetup' },
            { value: 'compensation', label: 'Compensation' }
        ];
        return (
            <div>
                <div>
                    <form>
                        <Select options={options} />
                    </form>
                </div>


            </div>
        )
    }
}
