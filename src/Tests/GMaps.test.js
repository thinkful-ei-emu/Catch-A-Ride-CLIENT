import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';
import { Map } from 'google-maps-react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Map google={{}} /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
