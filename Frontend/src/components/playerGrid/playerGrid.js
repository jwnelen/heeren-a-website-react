import React, {Component} from 'react';
import Player from '../player/player'
import './playerGrid.css'
import api from '../../data/api.js'
															
function PlayerList(data) {
	const players = data.data.playerData;
		const items = players.map( (player, index) => 
					<Player className="col-6" 
						name={player.name} 
						nickname={player.nickname}
						id={player.id}
						amountDaltonsEarned={player.amountDaltonsEarned}
						amountDaltonsReceived={player.amountDaltonsReceived}
						ratingSingles={player.single_rating}
						ratingDoubles={player.doubles_rating}
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
			console.log('constructor: isLoading is: ' + this.state.isLoading)
  }					
	
	componentDidMount() {
		console.log('mounted; isLoading: ' + this.state.isLoading);
		
		console.log(api);
		
		api.getPlayers().then(data => {
			console.log('got data; ' + data)
			this.setState({ 
								playerData: data, 
								isLoading: false 
					});
		})		
	}
	
    //special react function to render content on the screen
    render(props) {
        return(
					<div>
						<h1>Het Heeren-A team</h1>
						
						<div className="container">
							<div className="row justify-content-center">
								{ this.state.isLoading === true ?
									<p>no data to display </p> :
										<PlayerList data={this.state}></PlayerList>
								}
							</div>
						</div>
					</div>
        );
    }
}

export default PlayerGrid

