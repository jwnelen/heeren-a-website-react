import React, { Component } from 'react';
import api from '../data/api.js'
import AuthService from "../services/auth.service";
import EditPlayerProfile from "../components/editPlayerProfile/editPlayerProfile"
class UserProfile extends Component {
	
	constructor(props) {
    super(props);
 
    this.state = {
      player: {},
      isLoading: true,
      error: null,
			currentUser: AuthService.getCurrentUser()
    };
		
		this.handleSaveButton = this.handleSaveButton.bind(this);

  }
	
	componentDidMount() {
		const {currentUser} = this.state;
		
		if(currentUser && currentUser.user_player_id) {	
			api.getPlayerById(currentUser.user_player_id)
				.then(player => {
						this.setState({
							player: player[0],
							isLoading: false
							})
				})
		}
	}
	
	handleSaveButton(data) {
		api.updatePlayer(this.state.currentUser.user_player_id, data)
	}
	
	render() {
		const {isLoading, currentUser, player} = this.state;
		
		if(isLoading) {
			return <h3 className='mt-4'>loading... </h3>
		} else 
			return (
					<div className='container'>
							<h2>User Profile </h2>
							<p>{currentUser.username}</p>
							<p>{currentUser.email}</p>
							<p>{currentUser.user_player_id}</p>
							<h2>Player Profile</h2>
							<EditPlayerProfile player={player} saveProfile={this.handleSaveButton}/>
					</div>
				)
			}
	}
    
export default UserProfile