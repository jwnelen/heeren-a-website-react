import React, {useEffect, useState} from 'react';
import './navbar.css'
import AuthService from "../../services/auth.service";
import {navigate} from "@reach/router";

export default () => {
  const [user, setUser] = useState()
  const isAuthorized = user?.username;

  const [isNavCollapsed, setNavCollapsed] = useState(true);

  useEffect(() => {
    setUser(AuthService.getCurrentUser())
  }, [])

  const logOut = () => {
    AuthService.logout();
    navigate("/").then(() => window.location.reload());
  }

  const handleNavCollapse = () => setNavCollapsed(!isNavCollapsed)

  return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand mb-0 h1" href="/">Heeren A Tenniphil</a>
        <button className="custom-toggler navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarsExample09"
                aria-controls="navbarsExample09"
                aria-expanded={!isNavCollapsed}
                aria-label="Toggle navigation"
                onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"/>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href={"/team"}>Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={"/daltons"}>Daltons</a>
            </li>
          </ul>
          {isAuthorized ? (
              <ul className='navbar-nav ml-auto'>
							<span className="navbar-item">
      					<a className="nav-link" href={"/userProfile"}>Profile</a>
    					</span>
                <li className="nav-item">
                  <a className="nav-link" href="/" onClick={logOut}>logout</a>
                </li>
              </ul>
          ) : (
              <ul className='navbar-nav ml-auto'>
                <li className="nav-item">
                  <a className="nav-link" href={"/login"}>Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={"/register"}>Register</a>
                </li>
              </ul>
          )}
        </div>
      </nav>
  );
}
