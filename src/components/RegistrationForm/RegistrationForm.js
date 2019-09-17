import React from "react";

export default class RegistrationForm extends React.Component {
  render() {
    return (
      <section>
        <form className="registration-form">
          <label>Enter Full Name</label>
          <input placeholder="Enter First and Last Name"></input>
          <label>Email:</label>
          <input placeholder="Enter Email"></input>
          <label>UserName:</label>
          <input placeholder="Enter deired username "></input>
          <label>Password:</label>
          <input placeholder="Enter Password"></input>
          <button type="submit">Register</button>
        </form>
      </section>
    );
  }
}
