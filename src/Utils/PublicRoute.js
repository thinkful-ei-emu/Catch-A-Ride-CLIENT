import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../services/token-service';
// import UserContext from '../context/UserContext';

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component;
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken()
          ? <Redirect to={'/rides'} />
          : <Component {...componentProps} />
      )}
    />
  );
}


// export default class PublicOnlyRoute extends React.Component {
//   static contextType = UserContext;
//   render() {
//     const { Component, ...props } = this.props;
//     console.log('logged in', this.context.loggedIn);
//     return (
//       <Route
//         {...props}
//         render={componentProps => (
//           this.context.loggedIn
//             ? <Redirect to={'/rides'} />
//             : <Component {...componentProps} />
//         )}
//       />
//     );
//   }
// }