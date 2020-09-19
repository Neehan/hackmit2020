import React from 'react';
import {
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

import Home from "./components/Home";

export default function Routes() {
  return (
    <Router>
      <Route path={["/", "/home"]} component={Home} />
    </Router>
  );
}
