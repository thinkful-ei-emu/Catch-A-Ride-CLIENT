import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';
import UserRides from '../components/UserRides/UserRides';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><UserRides /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});