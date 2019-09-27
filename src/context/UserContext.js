import React, { Component } from 'react';
// import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';


const UserContext = React.createContext({
  user: {},
  error: null,
  setError: () => { },
  clearError: () => { },
  setUser: () => { },
  loggedIn: false,
  setLoggedIn: () => {},
  // processLogin: () => { },
  // processLogout: () => { },
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

  // componentDidMount() {
  //   if (TokenService.hasAuthToken()) {
  //     IdleService.regiserIdleTimerResets();
  //     TokenService.queueCallbackBeforeExpiry(() => {
  //       this.fetchRefreshToken();
  //     });
  //   }
  // }

  // componentWillUnmount() {
  //   IdleService.unRegisterIdleResets();
  //   TokenService.clearCallbackBeforeExpiry();
  // }

    setError = error => {
      console.error(error);
      this.setState({ error });
    }

    clearError = () => {
      this.setState({ error: null });
    }

    // setUser = user => {
    //   this.setState({ user });
    //   // console.log(user);
    // }

    // clearUser = () => {
    //   this.setState({user: {}});
    // }

    setLoggedIn = user => {
      TokenService.saveUser(user);
      this.setState({loggedIn: TokenService.hasAuthToken(), user});
    }

    setLoggedOut = () => {
      TokenService.clearUser();
      this.setState({loggedIn: TokenService.hasAuthToken(), user: {}});
    }

    // processLogin = authToken => {
    //   TokenService.saveAuthToken(authToken);
    //   const jwtPayload = TokenService.parseAuthToken();
    //   this.setUser({
    //     id: jwtPayload.user_id,
    //     name: jwtPayload.name,
    //     username: jwtPayload.sub,
    //   });
    //   IdleService.regiserIdleTimerResets();
    //   TokenService.queueCallbackBeforeExpiry(() => {
    //     this.fetchRefreshToken();
    //   });
    // }

    // processLogout = () => {
    //   TokenService.clearAuthToken();
    //   TokenService.clearCallbackBeforeExpiry();
    //   IdleService.unRegisterIdleResets();
    //   this.setUser({});
    // }

    // logoutBecauseIdle = () => {
    //   TokenService.clearAuthToken();
    //   TokenService.clearCallbackBeforeExpiry();
    //   IdleService.unRegisterIdleResets();
    //   this.setUser({ idle: true });
    // }

    // fetchRefreshToken = () => {
    //   AuthApiService.refreshToken()
    //     .then(res => {
    //       TokenService.saveAuthToken(res.authToken);
    //       TokenService.queueCallbackBeforeExpiry(() => {
    //         this.fetchRefreshToken();
    //       });
    //     })
    //     .catch(err => {
    //       this.setError(err);
    //     });
    // }

    render() {
      const value = {
        user: this.state.user,
        error: this.state.error,
        setError: this.setError,
        clearError: this.clearError,
        // setUser: this.setUser,
        loggedIn: this.state.loggedIn,
        setLoggedIn: this.setLoggedIn,
        // clearUser: this.clearUser,
        setLoggedOut: this.setLoggedOut,
        // processLogin: this.processLogin,
        // processLogout: this.processLogout,
      };
      return (
        <UserContext.Provider value={value}>
          {this.props.children}
        </UserContext.Provider>
      );
    }
}