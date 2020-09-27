import React, {Component} from 'react';
import Player from '../player/player'
import './playerGrid.css'
import api from '../../data/api.js'
															
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
 
    this.state = {
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
	}
	
    render(props) {
        return(
					<div>
						<h1>Het Heeren-A team</h1>
						<div className="container">
							<div className="row justify-content-center">
								{ this.state.isLoading === true ?
									<p>no data to display </p> :
										<PlayerList players={this.state.playerData}></PlayerList>
								}
							</div>
						</div>
					</div>
        );
    }
}

export default PlayerGrid

