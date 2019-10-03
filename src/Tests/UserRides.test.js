import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';
import UserRides from '../components/UserRides/UserRides';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><UserRides /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<MemoryRouter><UserRides /></MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});