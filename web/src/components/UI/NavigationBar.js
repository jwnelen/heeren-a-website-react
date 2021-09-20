import React, {useEffect, useState} from 'react';
import AuthService from "../../services/auth.service";
import {AppBar, Box, Toolbar} from "@material-ui/core";
import {useHistory, Link,} from "react-router-dom";

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
    // navigate("/").then(() => window.location.reload());
  }

  return (
      <Box className="flex-grow">
        <AppBar position="static">
          <Toolbar className="flex justify-space-between">
            <div className="flex md:flex-gap-3 sm:flex-gap-1 items-center">
              <h2 className={"cursor-pointer"} onClick={() => history.push("/")}>Heeren A Tenniphil</h2>
              <a href={"/daltons"} className="h4">
                Daltons
              </a>
              <Link to={"/players"} className="h4">
                Players
              </Link>
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
