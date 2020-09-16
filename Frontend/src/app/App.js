import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from '../contents/home.js'
import Contact from '../contents/contact.js'
import NavBar from '../components/NavigationBar/navbar'
import PlayerGrid from '../components/playerGrid/playerGrid'

function App() {
	
	return (
    <Router>
    	<div className="App">
				<NavBar></NavBar>
				<Route exact path="/">
					<PlayerGrid></PlayerGrid>
				</Route>
    		<Route path="/contact">
    			<Contact />
    		</Route>
				<Route path="/team">
					<PlayerGrid></PlayerGrid>
    		</Route>
    	</div>
    </Router>
    );
}

export default App;
