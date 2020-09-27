import React, {Component} from 'react';
import './playerProfile.css'
import api from '../../data/api.js'
import RatingDisplay from '../rating-display/rating-display.js'

let link_fed = "https://images2.persgroep.net/rcs/SkRGKcrJ4sDaW0oWOoBQKgW9lYA/diocontent/169326362/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8"

class PlayerProfile extends Component {
	
	constructor(props) {
    super(props);
 
    this.state = {
      playerData: [],
      isLoading: true,
      error: null,
    };
  }					
	
	componentDidMount() {
		const { id } = this.props.match.params
		
		api.getPlayerById(id).then(data => {
			this.setState({ 
								playerData: data[0], 
								isLoading: false 
					});
		})		
	}
	
	render(props) {			
			return(
				<div className="card container">
					<div className="card-body player">
						<img className="card-img-top" src={link_fed} alt="player"></img>
								<h3 className="card-title">{this.state.playerData.nickname || "Nickname"}</h3> 						<p className="card-text text-secondary mb-1 font-italic font-light" >{this.state.playerData.name || "Name"}</p>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<RatingDisplay
								ratingSingles={this.state.playerData.single_rating}
								ratingDoubles={this.state.playerData.doubles_rating}
								ratingSinglesEndingYear={this.state.playerData.single_rating_ending_year}
								ratingDoublesEndingYear={this.state.playerData.doubles_rating_ending_year}/>
						</li>
						<li className="list-group-item">Daltons genomen: {this.state.playerData.amountDaltonsReceived || 0}</li>
						<li className="list-group-item">Daltons uitgedeeld: {this.state.playerData.amountDaltonsEarned || 0} </li>
						<li className="list-group-item">id: {this.state.playerData.id} </li>
				</ul>
				</div>
			);
	}
}

export default PlayerProfile


