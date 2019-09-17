import React from "react";
import {Link} from 'react-router-dom';

export default class LoginForm extends React.Component {
  render() {
    return (
      <section>
        <h2>Login</h2>
        <form className="">
          <label>UserName</label>
          <input placeholder="Enter UserName"></input>
          <label>Password</label>
          <input placeholder="Enter Password"></input>
          <p>Not a member yet? Sign up <Link to='/'>here</Link></p>
          <button>Sign In</button>
        </form>
      </section>
    );
  }
}
