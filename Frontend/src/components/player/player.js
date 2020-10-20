import React, {Component} from 'react';
import './player.css'
import RatingDisplay from '../rating-display/rating-display.js'

let link_fed = "https://images2.persgroep.net/rcs/SkRGKcrJ4sDaW0oWOoBQKgW9lYA/diocontent/169326362/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8"

class Player extends Component {
	render(props) {			
			return(
				 <div className="card player">
						<a href={ "/players/" + this.props.player.id}><img className="card-img-top" src={link_fed} alt="player"></img></a>

					<div className="card-body">
								<a href={ "/players/" + this.props.player.player_id}><h3 className="card-title">{this.props.player.nickname || "Nickname"}</h3> </a>
								<p className="card-text text-secondary mb-1 font-italic font-light" >{this.props.player.name || "Name"}</p>
					<ul className="list-group list-group-flush">
						<li className="list-group-item"> 
							<RatingDisplay 
								ratingSingles={this.props.player.single_rating}
								ratingDoubles={this.props.player.doubles_rating}
								ratingSinglesEndingYear={this.props.player.single_rating_ending_year}
								ratingDoublesEndingYear={this.props.player.doubles_rating_ending_year}>
							</RatingDisplay>
						</li> 
					</ul>
					</div>
				</div> 
			);
	}
}

export default Player


