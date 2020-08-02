import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Welcoming from "./components/auth/Welcoming";
import Signin from "./components/auth/Signin";
import Home from "./components/Home/Home";
import DailyTraining from "./components/DailyTraining/DailyTraining";
import Main from "./components/Main";

function App() {

  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/signup" component={Signup} />
      <Route path="/welcoming" component={Welcoming} />
      <Route path="/signin" component={Signin} />
      <Route path="/training" component={DailyTraining} />
      <Route path="/Home" exact component={Home} />

    </Router>
  );
}

export default App;
