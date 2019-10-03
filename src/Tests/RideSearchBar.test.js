import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';
import RideSearchBar from '../components/RideSearchBar/RideSearchBar';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><RideSearchBar /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<MemoryRouter><RideSearchBar /></MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});