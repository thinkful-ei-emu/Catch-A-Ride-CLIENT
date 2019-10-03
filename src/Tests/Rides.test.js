import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';
import Rides from '../routes/Rides/Rides';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Rides /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<MemoryRouter><Rides /></MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});