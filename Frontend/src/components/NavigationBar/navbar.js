import React, {Component} from 'react';
import './navbar.css'
import AuthService from "../../services/auth.service";

class NavBar extends Component {		
	constructor(props) {
    super(props);

		this.handleNavCollapse = this.handleNavCollapse.bind(this);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
			isNavCollapsed: true
    };
  }
	
	handleNavCollapse = () => {
		this.setState(prevState => ({
			isNavCollapsed: !prevState.isNavCollapsed
		}));
	}
	
	render(props) {
		const {isNavCollapsed, currentUser} = this.state;
		let logginIn = currentUser && currentUser.username;
		
			return(
				<nav className="navbar navbar-expand-md navbar-light bg-light">
						<a className="navbar-brand mb-0 h1" href="/">Heeren A Tenniphil</a>
							<button className="custom-toggler navbar-toggler" 
								type="button" 
								data-toggle="collapse" 
								data-target="#navbarsExample09" 
								aria-controls="navbarsExample09" 
								aria-expanded={!isNavCollapsed ? true : false} 
								aria-label="Toggle navigation" 
								onClick={this.handleNavCollapse}>
							<span className="navbar-toggler-icon"></span>
						</button>
					<div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" href="/team" >Team</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/daltons">Daltons</a>
							</li>
						</ul>
						{logginIn && (
							<ul className='navbar-nav ml-auto'>
							<span className="navbar-text">
      					{currentUser.username}
    					</span>
							<li className="nav-item">
								<a className="nav-link" href="/" onClick={this.props.logOut}>logout</a>
							</li>
								</ul>
								)}
								
						{!logginIn && (
							<ul className='navbar-nav ml-auto'>
								<li className="nav-item">
									<a className="nav-link" href="/login">Login</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/register">Register</a>
								</li>
						</ul>
								)}
						 
					</div>
				</nav>
			);
    }
}

export default NavBar
