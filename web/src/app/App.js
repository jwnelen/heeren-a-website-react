//https://bezkoder.com/react-jwt-auth/

import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route,} from "react-router-dom";

import Home from '../contents/home.js'
import Daltons from '../contents/daltons.js'
import Team from '../contents/team.js'
import UserProfile from '../contents/userProfile'

import NavBar from '../components/NavigationBar/navbar'
import PlayerProfile from '../components/playerProfile/playerProfile'
import RegisterForm from '../components/registerForm/registerForm'
import LoginForm from '../components/loginForm/loginForm'

import AuthService from "../services/auth.service";

const App = () => {
  let user = null;

  useEffect(() => {
    user = AuthService.getCurrentUser();
  }, [])

  const logOut = () => {
    AuthService.logout();
    this.props.history.push("/");
  }

  return (
      <Router>
        <div className="App">
          <NavBar logOut={logOut}/>

          <Route exact path="/"
                 component={Home}>
          </Route>
          <Route path="/team"
                 component={Team}>
          </Route>
          <Route path="/register"
                 component={RegisterForm}>
          </Route>
          <Route path="/login"
                 component={LoginForm}>
          </Route>
          <Route exact path="/daltons"
                 component={Daltons}>
          </Route>
          <Route
              path="/players/:id"
              component={PlayerProfile}>
          </Route>
          <Route
              path="/userProfile"
              component={UserProfile}>
          </Route>
        </div>
      </Router>
  );
}

export default App;
