import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import config from '../../config';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src = './js/script.js';
  }

  onSignIn = async (googleUser) => {
    const profile = googleUser.getBasicProfile();
    const id_token = googleUser.getAuthResponse().id_token;

    console.log(id_token);

    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    try {
      let stuff = await fetch(config.API_ENDPOINT + '/auth/glogin', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          id_token
        })
      });
      stuff = await stuff.json();

      console.log(stuff);

      this.setState({
        loggedIn: true
      });
    }
    catch (e) {
      console.error(e.message);
    }
  }
  googleResponse = (response) => {
    console.log(response);
  }

  logout = (response) => {
    this.setState({
      loggedIn: false
    });

    console.log('Signed Out.');
  }

  render() {
    return <>
      <GoogleLogin
        clientId={config.CLIENT_ID}
        buttonText={this.state.loggedIn ? 'Signed In' : 'Sign In'}
        onSuccess={this.onSignIn}
        onFailure={this.googleResponse}
        cookiePolicy={'single_host_origin'}
      >
      </GoogleLogin>

      <GoogleLogout
        clientId={config.CLIENT_ID}
        buttonText='Sign Out'
        onLogoutSuccess={this.logout}
      />

    </>;
  }
}

export default LoginPage;