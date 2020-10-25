//https://bezkoder.com/react-jwt-auth/

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from '../contents/home.js'
import Daltons from '../contents/daltons.js'
import Team from '../contents/team.js'
import NavBar from '../components/NavigationBar/navbar'
import PlayerProfile from '../components/playerProfile/playerProfile'
import RegisterForm from '../components/registerForm/registerForm'
import LoginForm from '../components/loginForm/loginForm'

import AuthService from "../services/auth.service";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }
	
	componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  logOut() {
		console.log('logout')
    AuthService.logout();
		this.props.history.push("/");
//    window.location.reload();
  }
	
	render() {
		return (
			<Router>
				<div className="App">
					<NavBar logOut={this.logOut}></NavBar>
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
						component={PlayerProfile}/>
				</div>
			</Router>
			);
		}
}

export default App;
