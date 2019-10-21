import React, { Component } from 'react';
import TokenService from '../services/token-service';


const UserContext = React.createContext({
  user: {},
  error: null,
  setError: () => { },
  clearError: () => { },
  setUser: () => { },
  loggedIn: false,
  setLoggedIn: () => { },
});

export default UserContext;

export class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: TokenService.getUser(),
      error: null,
      loggedIn: TokenService.hasAuthToken()
    };
  }

  setError = error => {
    // eslint-disable-next-line no-console
    
    this.setState({ error });
  }

  clearError = () => {
    this.setState({ error: null });
  }

  setLoggedIn = user => {
    TokenService.saveUser(user);
    this.setState({ loggedIn: TokenService.hasAuthToken(), user });
  }

  setLoggedOut = () => {
    TokenService.clearUser();
    this.setState({ loggedIn: TokenService.hasAuthToken(), user: {} });
  }

  render() {
    const value = {
      user: this.state.user,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      loggedIn: this.state.loggedIn,
      setLoggedIn: this.setLoggedIn,
      setLoggedOut: this.setLoggedOut,
    };
    
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}