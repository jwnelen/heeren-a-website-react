import React, { Component } from 'react';
import api from '../data/api.js'
import AuthService from "../services/auth.service";

class UserProfile extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
      error: null,
			currentUser: AuthService.getCurrentUser()
		}
	}
	
	componentDidMount() {
		this.setState({ 
						isLoading: false
						})
	}
	
	render() {
		const {isLoading, currentUser} = this.state;
		
		if(isLoading) {
			return <h3 className='mt-4'>loading... </h3>
		} else 
			return (
					<div className='container'>
							<h2>User Profile </h2>
							<p>{currentUser.username}</p>
							<p>{currentUser.email}</p>
					</div>
				)
			}
	}
    
export default UserProfile