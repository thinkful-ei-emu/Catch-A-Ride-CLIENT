import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import UserContext from '../../context/UserContext';

export default class Footer extends Component {
  static contextType = UserContext;

  logout = () => {
    TokenService.clearAuthToken();
    this.context.setLoggedOut();
  };

  renderFooter() {
    return (
      <footer></footer>
    );
  }

  render() {
    return (
        <>
          {this.context.loggedIn ? this.renderFooter() : '' }
        </>
    );  
  }
}
