import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from './screens/Welcome'
import Signup from './screens/Signup'
import login from './screens/Login'
import Layout from './components/Layout'
import Navigation from './components/Navigation'

function App() {
  return (
    <React.Fragment >
      {/* <Layout > */}
      <Router>
        <Navigation />
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={login} />
      </Router>
      {/* </Layout> */}
    </React.Fragment >
  );
}

export default App;
