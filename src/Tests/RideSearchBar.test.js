import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';
import RideSearchBar from '../components/RideSearchBar/RideSearchBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><RideSearchBar /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});