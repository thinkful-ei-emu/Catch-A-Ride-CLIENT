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

  onSignIn = async googleUser => {
    const profile = googleUser.getBasicProfile();

    const id_token = googleUser.getAuthResponse().id_token;
    const expires_at = googleUser.getAuthResponse().expires_at;
    TokenService.saveExpiresAt(expires_at);
   
    TokenService.saveAuthToken(id_token);

    TokenService.getAuthToken();
    this.context.setLoggedIn({
      user_id: profile.getId(),
      name: profile.getName(),
      email: profile.getEmail()
    });

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
      
    } catch (e) {
      console.error(e.message);
    }
  };

  onFailure = (error) => {
    console.error(error);
  }

  logout = () => {
    TokenService.clearAuthToken();
  };

  

  render() {
    return (
      <div className="landing">
        <ReactCSSTransitionGroup
             
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={3000}
          transitionEnter={false}
          transitionLeave={false}>
          <h1>
             
            <img src={Logo} alt="Catch A Ride Logo"/>
          </h1>
          
          <h2>Need A Ride?</h2>
            
          <section className="intro">
              
            <p>
              Catch-A-Ride is a useful tool to connect with people and share rides
              The tool allows people to find others heading in to the same
              location and effectively carpool together.
            </p>
            
          </section>
           
          <h2 className='login'>Log In</h2>
          
          <br></br>
          {!this.context.loggedIn ? (
            <GoogleLogin
              clientId={config.CLIENT_ID}
              buttonText={this.context.loggedIn ? 'Signed In' : 'Sign In'}
              onSuccess={this.onSignIn}
              onFailure={this.onFailure}
              cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
          ) : (
            <Redirect to='/rides' />
          )}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default LoginPage;
