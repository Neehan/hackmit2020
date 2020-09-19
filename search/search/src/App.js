import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SearchBar } from './components/SearchBar';

function App() {
   return (
    <React.Fragment>
      <Router>
        <SearchBar />
      </Router>
    </React.Fragment>
   );
}
export default App;
