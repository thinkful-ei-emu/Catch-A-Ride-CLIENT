import React from 'react';
import {Link} from 'react-router-dom';

export default class RegistrationForm extends React.Component {
  render() {
    return (
      <section>
        <h2>Register</h2>
        <form className="registration-form">
          <label>Enter Full Name</label>
          <input placeholder="Enter First and Last Name"></input>
          <label>Email:</label>
          <input placeholder="Enter Email"></input>
          <label>UserName:</label>
          <input placeholder="Enter deired username "></input>
          <label>Password:</label>
          <input placeholder="Enter Password"></input>
          <p>Already a member? Sign in <Link to='/login'>here</Link></p>
          <button type="submit">Register</button>
        </form>
      </section>
    );
  }
}
