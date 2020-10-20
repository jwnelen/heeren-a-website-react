import React, {Component} from 'react';
import Player from '../player/player'
import './playerGrid.css'
															
function PlayerList(players) {
	const items = players.players.map( (player, index) => 
				<Player className="col-6" 
					player={player}
					key={index}/>
												);
				return items
}		

class PlayerGrid extends Component {
  constructor(props) {
    super(props);
  }					
	
	render(props) {
		const {players} = this.props;
		
		return(
			<div>
				<div className="container">
					<div className="row justify-content-center">
						<PlayerList players={players}></PlayerList>
					</div>
				</div>
			</div>
		);
	}
}

export default PlayerGrid

