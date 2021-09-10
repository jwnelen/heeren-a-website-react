import React, {useEffect} from "react";

import {Router} from "@reach/router";

// pages
import Home from "pages/home.jsx";
import Team from "pages/team";
import Daltons from "pages/daltons";
import UserProfile from "pages/userProfile";
import NotFound from "pages/404";

// Auth
import RegisterForm from "components/registerForm/registerForm";
import LoginForm from "components/loginForm/loginForm";

import PlayerProfile from "components/playerProfile/playerProfile";

import AuthService from "services/auth.service";

export default () => {
  let user = null;

  useEffect(() => {
    user = AuthService.getCurrentUser();
  }, [])

  return (
      <Router>
        <Home exact path="/"/>
        <Team path="/team"/>
        <RegisterForm path="/register"/>
        <LoginForm path="/login"/>
        <Daltons path="/daltons"/>
        <PlayerProfile path="/players/:id"/>
        <UserProfile path="/userProfile"/>
        <NotFound default/>
      </Router>
  )
}