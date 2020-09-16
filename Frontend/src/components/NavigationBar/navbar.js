import React, {Component} from 'react';
import './navbar.css'

class NavBar extends Component {
     //special react function to render content on the screen
    render() {
        return(
           	<ul className="nav justify-content-center">
							<li className="nav-item">
								<a className="nav-link active" href="/">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/team">Team</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/contact">Contact</a>
							</li>
						</ul>
        );
    }
}

export default NavBar
