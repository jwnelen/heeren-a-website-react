import React, {Component} from 'react';
//import axios from 'axios'
import Player from '../player/player'
import './playerGrid.css'

//import playerData from '../../data/data.json'

const apiUrl = 'http://127.0.0.1:8080/api/players/';


															
function PlayerList(data) {
//	console.log('playerlist');
	
	const players = data.data.playerData;
//	return (<p>{JSON.stringify(players)}</p>);
		const items = players.map( (player, index) => 
					<Player className="col-6" 
						name={player.name} 
						nickname={player.nickname} 
						amountDaltonsEarned={player.amountDaltonsEarned}
						amountDaltonsReceived={player.amountDaltonsReceived}
						ratingSingles={player.ratingSingles}
						ratingDoubles={player.ratingDoubles}
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
		fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
				console.log('data: ' + JSON.stringify(data))
					this.setState({ 
							playerData: data, 
							isLoading: false 
				});
			});
															
	}
	
    //special react function to render content on the screen
    render(props) {
        return(
					<div>
						<h1>The dream team</h1>
						
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

