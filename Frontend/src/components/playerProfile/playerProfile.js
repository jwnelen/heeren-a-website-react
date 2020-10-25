import React, {Component} from 'react';
import './playerProfile.css'
import api from '../../data/api.js'
import RatingDisplay from '../rating-display/rating-display.js'
import AuthService from "../../services/auth.service";

let link_fed = "https://images2.persgroep.net/rcs/SkRGKcrJ4sDaW0oWOoBQKgW9lYA/diocontent/169326362/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8"

class PlayerProfile extends Component {
	
	constructor(props) {
    super(props);
 
    this.state = {
      player: {},
			posts: [],
      isLoading: true,
      error: null,
			currentUser: AuthService.getCurrentUser()
    };
  }					
	
	componentDidMount() {
		const { id } = this.props.match.params
		
		api.getPlayerById(id).then(pl => {
			api.getPosts()
				.then(postsData =>
						api.getDaltonsTookByPlayerId(id)
							.then(daltookpl => {
						
								pl[0].amountDaltonsTook = parseInt(daltookpl.count);
				
								this.setState({ 
									posts: postsData,
									player: pl[0],
									isLoading: false,
							})
						}
				))
		})
	}
	
	render(props) {
		const {player, isLoading, posts, currentUser} = this.state;
		
		let array = [];
		let renderQuotes;
		if(!isLoading ) {
			posts.forEach(post => {
				post.body.split(/[.\n]/).forEach(res => {
					if(res.includes(player.nickname) || res.includes(player.name.split(' ')[0] )){
						array.push([res.trim(), post.title])
					}
				})
			})
			renderQuotes = array.map( ([sentence, title], index) => <li className="list-group-item font-italic" key={index} >"{sentence}. - <b>{title}</b>"</li>)
		}
		
		if(isLoading) return <p>Loading...</p>
		else {
			return(
				<div>
				<p>
          <strong>Token:</strong>{" "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
					<div className="card container">
						<div className="card-body player">
							<img className="card-img-top" src={link_fed} alt="player"></img>
									<h3 className="card-title">{player.nickname || "Nickname"}</h3> 						
									<p className="card-text text-secondary mb-1 font-italic font-light" >{player.name || "Name"}</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<RatingDisplay
									ratingSingles={player.singles_rating}
									ratingDoubles={player.doubles_rating}
									ratingSinglesEndingYear={player.singles_rating_ending_year}
									ratingDoublesEndingYear={player.doubles_rating_ending_year}/>
							</li>
							<li className="list-group-item">id: {player.player_id} </li>
							<li className="list-group-item">Aantal daltons genomen: {player.amountDaltonsTook} </li>
						</ul>
					</div>
					<div className='container mt-5'>
						<h3>Quotes</h3>
						<ul className='list-group list-group-flush '>
						{renderQuotes}
						</ul>
					</div>
				</div>
			);
		}
	}
}

export default PlayerProfile


