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
          <Route exact path="/"><Home/> </Route>
          <Route path="/register"><RegisterForm/> </Route>
          <Route path="/login"><LoginForm/> </Route>
          <Route path="/players/:id"> <PlayerComponent/> </Route>
          <Route path="/players"><Players/> </Route>
          <Route path="/daltons"><Daltons/> </Route>
          <Route path="/profile"><UserProfile/> </Route>
          <Route default> <NotFound/> </Route>
        </Switch>
      </Router>
  )
}