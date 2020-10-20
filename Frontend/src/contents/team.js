import React, { Component } from 'react';
import PlayerGrid from '../components/playerGrid/playerGrid'
import api from '../data/api.js'

class Team extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			playerData: [],
      isLoading: true,
			errors: [],
    };
	}
	
	
	componentDidMount() {
		api.getPlayers().
			then(data => {
				if(data) {
					console.log('team page mounted with data: ' + JSON.stringify(data))
					this.setState({ 
									playerData: data, 
									isLoading: false 
						});
				} else {
					console.log('data is undefined')
				}
			})		
	}
	
	render() {
		const {isLoading, playerData} = this.state;
		
		if(isLoading) {
			return <h3 className='mt-4'>loading...</h3>;
		} else {
			return (
					<div>
						<h1>Team Heeren-A</h1>
						<PlayerGrid players={playerData}></PlayerGrid>
					</div>
					)
			}
	}
}
export default Team
    