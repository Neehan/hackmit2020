import React from 'react';
import logo from '../style/logo.svg';
import '../style/App.css';

import StateManagerProvider from "./providers/StateManagerProvider";
import Routes from "../Routes";

function App() {
  return (
    <StateManagerProvider>
      <Routes />
    </StateManagerProvider>
  );
}

export default App;
