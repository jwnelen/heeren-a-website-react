import React, {useEffect, useState} from 'react';
import AuthService from "../../services/auth.service";
import {AppBar, Box, Toolbar} from "@material-ui/core";
import {Link, useHistory,} from "react-router-dom";

export default () => {
  const [user, setUser] = useState()
  const isAuthorized = user?.username;
  let history = useHistory();

  useEffect(() => {
    setUser(AuthService.getCurrentUser())
  }, [])

  const logOut = () => {
    AuthService.logout();
    history.push("/")
    window.location.reload()
  }

  return (
      <Box className="flex flex-grow ">
        <AppBar position="static">
          <Toolbar className="flex flex-wrap justify-space-between">
            <div className="flex md:flex-gap-3 sm:flex-gap-3 items-center">
              <h2 className={"cursor-pointer"} onClick={() => history.push("/")}>Heeren A Tenniphil</h2>
              <Link to={"/daltons"} className="h4 text-white">
                Daltons
              </Link>
              <Link to={"/players"} className="h4 text-white">
                Spelers
              </Link>
            </div>
            {isAuthorized ?
                <div className="flex md:flex-gap-2 sm:flex-gap-2 items-center">
                  <Link className="px-4 text-white" to={"/profile"}>Profiel</Link>
                  <Link className="px-4 text-white" to={"/"} onClick={logOut}>Uitloggen</Link>
                </div>
                : <div className="flex md:flex-gap-2 sm:flex-gap-2 items-center">
                  <Link className="px-4 text-white" to={"/login"}>Login</Link>
                  <Link className="px-4 text-white" to={"/register"}>Registreer</Link>
                </div>}
          </Toolbar>
        </AppBar>
      </Box>
  )
}
