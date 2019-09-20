import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleLogin} from 'react-google-login';
import {MemoryRouter} from 'react-router-dom';
it('GoogleLogoin on Login Page renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <GoogleLogin />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('Login Header on login page renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <h2>Login</h2>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

