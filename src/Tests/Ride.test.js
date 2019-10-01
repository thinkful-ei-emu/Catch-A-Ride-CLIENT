import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';
import Ride from '../components/Ride/Ride';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const ride = {
    id: '154a8af7-4f6a-4c65-ab44-e8f659cf6797',
    driver_id: '113938795112280626788',
    starting: 'Virginia Beach',
    destination: 'Blacksburg',
    description: '$10 for gas, limited trunk space',
    driver_name: 'Andrew Yin',
    date_time: '2019-09-17T19:00:00.000Z',
    capacity: 4,
    p1: '101820519124146512532',
    p2: null,
    p3: null,
    p4: null,
    p5: null,
    p6: null,
    p7: null
  };
  ReactDOM.render(<MemoryRouter><Ride ride={ride} /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
