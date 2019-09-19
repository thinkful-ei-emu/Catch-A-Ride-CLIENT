import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';
import Rides from '../components/Rides/Rides';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Rides /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
