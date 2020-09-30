import React, {Component} from 'react';
import './daltonEditor.css'
import api from '../../data/api.js'

function PlayerDropdownList(players) {
	console.log('players: ' + JSON.stringify(players));
	const playerDropdown = players.players.map( (player, index) => 
				<option key={index} value={player.id}>{player.name}
				</option>
							);
				return playerDropdown
}	

class daltonEditor extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
      daltonData: {},
			playerData: [],
      isLoading: true,
      error: null,
    };
	}
	
	componentDidMount() {
		
		api.getPlayers().then(data => {
			this.setState({ 
								playerData: data, 
								isLoading: false 
					});
		})		
		
		console.log('added players data: ' + this.state.playerData);
		
		let dalton = {
			date_earned: "2020-06-06",
    	reason: "test reason from dalton editor",
    	person_earned_id: 3
		}
		
		
		
//		api.addDalton(dalton);
	}

	render(props) {
		return (
			<div>
			{ this.state.isLoading === true ?
									<p>no data to display </p> :
		<form>
			<div className="form-row align-items-center">
				<div className="col-auto my-1">
					<label className="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
					<select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
						<option selected>Choose...</option>
						<PlayerDropdownList players={this.state.playerData}></PlayerDropdownList>
					</select>
    		</div>
				</div>
			</form>
			 								}
				</div>

			);
	}
}

export default daltonEditor