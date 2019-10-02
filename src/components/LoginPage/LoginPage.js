import React from 'react';
import { GoogleLogin } from 'react-google-login';
import TokenService from '../../services/token-service';
import { Redirect } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import config from '../../config';
import './LoginPage.css';
import Logo from'./landing-logo.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class LoginPage extends React.Component {
  static contextType = UserContext
  state={appearHome:true,}

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     // id_token: null
  //   };
  // }



  onSignIn = async googleUser => {
    const profile = googleUser.getBasicProfile();

    const id_token = googleUser.getAuthResponse().id_token;
    const expires_at = googleUser.getAuthResponse().expires_at;
    TokenService.saveExpiresAt(expires_at);
    // const googleResponse = googleUser.getAuthResponse();
    TokenService.saveAuthToken(id_token);

    TokenService.getAuthToken();
    this.context.setLoggedIn({
      user_id: profile.getId(),
      name: profile.getName(),
      email: profile.getEmail()
    });

    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    try {
      // eslint-disable-next-line no-unused-vars
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
      // console.log('on sign in', user);
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
        <div className="landing">
          <ReactCSSTransitionGroup
             
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={3000}
            transitionEnter={false}
            transitionLeave={false}>
            <div className='psuedo-header'></div>
          
            <h1>
              {/* <img className='logo' src="https://img.icons8.com/wired/64/000000/fiat-500.png"></img> */}
              <img src={Logo}/>
            </h1>
          
            <h2>Need A Ride?</h2>
            
            <section className="intro">
              
              <p>
              Catch-A-Ride is a useful tool to connect with people and share rides
              The tool allows people to find others heading in to the same
              location and effectively carpool together.
              </p>
            
            </section>
           
            <h2>Log In</h2>
          
            <br></br>
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
          </ReactCSSTransitionGroup>
          <div className='psuedo-footer'></div>
        </div>
      </>
    );
  }
}

export default LoginPage;
