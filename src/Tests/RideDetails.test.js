import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';
import RideDetails from '../routes/RideDetails/RideDetails';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // const dummyProps = {match: {path: '/rides/:ride_id', url: '/rides/cd684ce0-e001-41df-aa43-af02536a7519', isExact: true, params: {ride_id: 'cd684ce0-e001-41df-aa43-af02536a7519'}}};
  ReactDOM.render(<MemoryRouter><RideDetails /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
