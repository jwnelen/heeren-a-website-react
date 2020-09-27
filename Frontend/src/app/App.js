import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from '../contents/home.js'
import NavBar from '../components/NavigationBar/navbar'
import PlayerGrid from '../components/playerGrid/playerGrid'
import PlayerProfile from '../components/playerProfile/playerProfile'

function App() {
	
	return (
    <Router>
    	<div className="App">
				<NavBar></NavBar>
				<Route exact path="/"
					component={Home}>
				</Route>
				<Route path="/team"
					component={PlayerGrid}>
    		</Route>
				<Route 
					path="/players/:id"
					component={PlayerProfile}/>
    	</div>
    </Router>
    );
}

export default App;
