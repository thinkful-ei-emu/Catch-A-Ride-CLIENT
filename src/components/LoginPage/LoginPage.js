import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

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

  onSignIn = (googleUser) => {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    this.setState({
      loggedIn: true
    });
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
        clientId='343760859315-00sfmokq5vc50ufqa8jg35rscb307eb5.apps.googleusercontent.com'
        buttonText={this.state.loggedIn ? 'Signed In' : 'Sign In'}
        onSuccess={this.onSignIn}
        onFailure={this.googleResponse}
        cookiePolicy={'single_host_origin'}
      >
      </GoogleLogin>

      <GoogleLogout
        clientId='343760859315-00sfmokq5vc50ufqa8jg35rscb307eb5.apps.googleusercontent.com'
        buttonText='Sign Out'
        onLogoutSuccess={this.logout}
      />

    </>;
  }
}

export default LoginPage;