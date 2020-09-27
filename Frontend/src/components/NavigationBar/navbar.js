import React, {Component} from 'react';
import './navbar.css'

class NavBar extends Component {
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
								<a className="nav-link" href="/daltons">Daltons</a>
							</li>
						</ul>
        );
    }
}

export default NavBar
