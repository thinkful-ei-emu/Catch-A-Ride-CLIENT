import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';
import Ride from '../components/Ride/Ride';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Ride /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
