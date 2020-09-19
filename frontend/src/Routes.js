import React, { useContext } from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";

import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import StateManagerContext from "./components/contexts/StateManagerContext";
import history from "./history";

export default function Routes() {
  const stateManager = useContext(StateManagerContext);

  const PrivateRoute = ({
    children,
    path
  }) => {
    return (
      <Route path={path}>
        { stateManager.loggedIn() ? children : <Redirect to="/login"/> }
      </Route>
    );
  };

  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/signUp" component={SignUpForm} />
        <PrivateRoute path={["/", "/home"]}>
          <Home />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}
