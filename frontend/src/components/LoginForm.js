import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import StateManagerContext from "./contexts/StateManagerContext";
import "../style/Auth.css";

/**
 * Simple login form that asks for username and password. Fields must be non-empty.
 */
function LoginForm() {
  const stateManager = useContext(StateManagerContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [emptyWarning, setEmptyWarning] = useState(false);

  let history = useHistory();

  function validateForm() {
    return userName.length && password.length;
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
        <div>
          <form onSubmit={handleSubmit}>
            <h3>LOCA Tutoring Login</h3>

            <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  value={userName}
                  onChange={(event) => setUserName(event.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            {
              (emptyWarning) &&
                <p className="text-danger">
                  Fields must be non-empty!
                </p>
            }
            <br/>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <br />
            <p className="forgot-password text-right">
              New to LOCA Tutoring? <a href="" onClick={(event) => {history.push("/signUp")}}> Sign up here</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
