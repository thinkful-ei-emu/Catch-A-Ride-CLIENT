import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import TokenService from '../../services/token-service';
import {Redirect} from 'react-router-dom';

import config from '../../config';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      id_token: null
    };
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src = './js/script.js';
  }

  onSignIn = async googleUser => {
    const profile = googleUser.getBasicProfile();
    const id_token = googleUser.getAuthResponse().id_token;
    const googleResponse = googleUser.getAuthResponse();
    TokenService.saveAuthToken(id_token);
    TokenService.getAuthToken();

    this.setState({
      id_token
    });

    

    // console.log(id_token);

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
    } catch (e) {
      console.error(e.message);
    }
  };
  googleResponse = response => {
    console.log(response);
  };

  logout = response => {
    this.setState({
      loggedIn: false,
      id_token: null
    });
    TokenService.clearAuthToken();

    console.log('Signed Out.');
  };

  async sendRequest() {
    try {
      let res = await fetch(config.API_ENDPOINT + '/auth', {
        method: 'GET',
        headers: {
          Authorization: `bearer ${this.state.id_token}`
        }
      });
      res = await res.text();

      console.log('res', res);
    } catch (e) {
      console.error(e.message);
    }
  }

  render() {
    return (
      <>
        <h2>Log In</h2>
        <br></br>
        <button onClick={() => this.sendRequest()}>Test Request</button><br></br>
        
        {!this.state.loggedIn ? (
          
          <GoogleLogin
            clientId={config.CLIENT_ID}
            buttonText={this.state.loggedIn ? 'Signed In' : 'Sign In'}
            onSuccess={this.onSignIn}
            onFailure={this.googleResponse}
            cookiePolicy={'single_host_origin'}
          ></GoogleLogin>
        ) : (

          <Redirect to='/rides'/>
          // <GoogleLogout
          //   clientId={config.CLIENT_ID}
          //   buttonText="Sign Out"
          //   onLogoutSuccess={this.logout}
          // />
        )}
      </>
    );
  }
}

export default LoginPage;
