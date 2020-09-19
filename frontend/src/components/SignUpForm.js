import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import StateManagerContext from "./contexts/StateManagerContext";
import "../style/Auth.css";

/**
 * Handles users signing up for the first time to use the app.
 */
function SignUpForm() {
  const stateManager = useContext(StateManagerContext);

  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [accountType, setAccountType] = useState("");
  const [subject, setSubject] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emptyWarning, setEmptyWarning] = useState(false);

  let history = useHistory();

  function validateForm() {
    return userName.length &&
            fullName.length &&
            email.length &&
            accountType.length &&
            subject.length &&
            password.length &&
            confirmPassword.length;
  }

  function handleSubmit(event) {
    event.preventDefault();
    validateForm() ? setEmptyWarning(false) : setEmptyWarning(true);
    // API call here.
    // Modify state manager here as well.
    // Finally, redirect to home page if successful login.
  }

  return (
    <div className="auth-wrapper vertical-center">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up for LOCA Tutoring</h3>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter full name"
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <label>Account Type</label>
          <div className="form-group">
            <td align="left">
              Student <input
                type="radio"
                checked={accountType === "student"}
                value="student"
                onChange={(event) => {setAccountType(event.target.value)}}
              />
              Tutor <input
                type="radio"
                checked={accountType === "tutor"}
                value="tutor"
                onChange={(event) => {setAccountType(event.target.value)}}
              />
            </td>
          </div>

          <div className="form-group">
            Subject of interest: <select value={subject} onChange={(event) => {setSubject(event.target.value)}}>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Confirm password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>

          {
            (emptyWarning) &&
              <p className="text-danger">
                Fields must be non-empty!
              </p>
          }
          <br />

          <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          <br />
          <p className="forgot-password text-right">
            Already registered? <a href="" onClick={() => {history.push("/login")}}>Log in here</a>.
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUpForm;
