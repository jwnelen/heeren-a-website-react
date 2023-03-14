import React from 'react';
import Player from '../UI/Player'
import './playerGrid.css'

const PlayersList = ({players}) => {
	console.log("players in list", players)
	const items = players.map( (player, index) =>
			<Player className="col-6"
							player={player}
							key={index}/>
	);

	return (
				<div className="flex container">
					<div className="row justify-content-center">
						{items}
					</div>
				</div>
	)
}

export default PlayersList