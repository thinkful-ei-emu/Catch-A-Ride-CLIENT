import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';
import SearchBox from '../components/SearchBox/SearchBox';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><SearchBox /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<MemoryRouter><SearchBox /></MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});