import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';
import CreateRideForm from '../components/CreateRideForm/CreateRideForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><CreateRideForm /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
