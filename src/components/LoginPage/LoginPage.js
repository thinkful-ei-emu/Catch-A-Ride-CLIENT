import React from 'react';
import { GoogleLogin } from 'react-google-login';
import TokenService from '../../services/token-service';
import {Redirect} from 'react-router-dom';
import UserContext from '../../context/UserContext';

import config from '../../config';

class LoginPage extends React.Component {
  static contextType=UserContext
  
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     // id_token: null
  //   };
  // }

  

  onSignIn = async googleUser => {
    const profile = googleUser.getBasicProfile();
   
    const id_token = googleUser.getAuthResponse().id_token;
    const googleResponse = googleUser.getAuthResponse();
    TokenService.saveAuthToken(id_token);
    
    TokenService.getAuthToken();
    this.context.setLoggedIn({
      user_id:profile.getId(),
      name:profile.getName(),
      email:profile.getEmail()
    });

    // this.setState({
    //   id_token
    // });

    

    // console.log(id_token);

    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    try {
      let user = await fetch(config.API_ENDPOINT + '/auth/glogin', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          id_token
        })
      });
      user = await user.json();
      console.log('on sign in', user);
      // console.log('loggedIn',this.state.loggedIn);
    } catch (e) {
      console.error(e.message);
    }
  };
  googleResponse = response => {
    console.log(response);
  };

  logout = () => {
    TokenService.clearAuthToken();
    // this.setState({
    //   id_token: null
    // });

    console.log('Signed Out.');
  };

  // async sendRequest() {
  //   try {
  //     let res = await fetch(config.API_ENDPOINT + '/auth', {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `bearer ${this.state.id_token}`
  //       }
  //     });
  //     res = await res.text();

  //     console.log('res', res);
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // }

  render() {
    return (
      <>
        <h2>Log In</h2>
        <br></br>
        <button onClick={() => this.sendRequest()}>Test Request</button><br></br>
        
        {!this.context.loggedIn ? (
          <GoogleLogin
            clientId={config.CLIENT_ID}
            buttonText={this.context.loggedIn ? 'Signed In' : 'Sign In'}
            onSuccess={this.onSignIn}
            onFailure={this.googleResponse}
            cookiePolicy={'single_host_origin'}
          ></GoogleLogin>
        ) : (
          <Redirect to='/rides' />
        )}
      </>
    );
  }
}

export default LoginPage;
