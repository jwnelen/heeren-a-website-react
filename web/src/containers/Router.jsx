import React, {useEffect} from "react";

// pages
import Home from "pages/home.jsx";
import Players from "pages/players";
import Daltons from "pages/daltons";
import UserProfile from "pages/userProfile";
import NotFound from "pages/404";

// Auth
import RegisterForm from "components/registerForm/registerForm";
import LoginForm from "components/loginForm/loginForm";

import PlayerProfile from "components/playerProfile/playerProfile";

import AuthService from "services/auth.service";
import {BrowserRouter as Router, Route, Switch, useParams} from "react-router-dom";

export default () => {
  let user = null;

  useEffect(() => {
    user = AuthService.getCurrentUser();
  }, [])

  const PlayerComponent = () => {
    let {id} = useParams();
    return (<PlayerProfile playerid={id}/>)
  }

  return (
      <Router>
        <Switch>
          <Home exact path="/"/>
          <RegisterForm path="/register"/>
          <LoginForm path="/login"/>
          <Route path="/players/:id">
            <PlayerComponent />
          </Route>
          <Players path="/players"/>
          <Daltons path="/daltons"/>
          <UserProfile path="/profile"/>
          <NotFound default/>
        </Switch>
      </Router>
  )
}