import React, {useEffect, useState} from 'react';
import './navbar.css'
import AuthService from "../../services/auth.service";
import {navigate} from "@reach/router";
import {AppBar, Box, Toolbar} from "@material-ui/core";

export default () => {
  const [user, setUser] = useState()
  const isAuthorized = user?.username;

  useEffect(() => {
    setUser(AuthService.getCurrentUser())
  }, [])

  const logOut = () => {
    AuthService.logout();
    navigate("/").then(() => window.location.reload());
  }

  return (
      <Box className="flex-grow">
        <AppBar position="static">
          <Toolbar className="flex justify-space-between">
            <div className="flex md:flex-gap-3 sm:flex-gap-1 items-center">
              <h2 className={"cursor-pointer"} onClick={() => navigate("/")}>Heeren A Tenniphil</h2>
              <a href={"/daltons"} className="h4">
                Daltons
              </a>
              <a href={"/players"} className="h4">
                Players
              </a>
            </div>
            {isAuthorized ?
                <div>
                  <a className="px-4" href={"/profile"} color="inherit">Profiel</a>
                  <a className="px-4" href={""} onClick={logOut} color="inherit">Uitloggen</a>
                </div>
                : <div>
                  <a className="px-4" href={"/login"} color="inherit">Login</a>
                  <a className="px-4" href={"/register"} color="inherit">Registreer</a>
                </div>}
          </Toolbar>
        </AppBar>
      </Box>
  )
}
