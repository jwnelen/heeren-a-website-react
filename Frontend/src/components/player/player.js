import React, {Component} from 'react';
import './player.css'

let link_fed = "https://images2.persgroep.net/rcs/SkRGKcrJ4sDaW0oWOoBQKgW9lYA/diocontent/169326362/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8"

class Player extends Component {
    render(props) {			
        return(
           <div className="card player">
							<a href={ "/players/" + this.props.id}><img className="card-img-top" src={link_fed} alt="player"></img></a>
							
						<div className="card-body">
									<a href={ "/players/" + this.props.id}><h3 className="card-title">{this.props.nickname || "Nickname"}</h3> </a>
									<p className="card-text text-secondary mb-1 font-italic font-light" >{this.props.name || "Name"}</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item"> 
									<div className="rating border"> 5
										<span className="current-rating">
											{this.props.ratingSingles || 0.0000} </span>
								</div>
								<div className="rating border"> 5
										<span className="current-rating justify-content-center">
											{this.props.ratingSingles || 0.0000} </span>
								</div>
							</li> 
							<li className="list-group-item">Daltons genomen: {this.props.amountDaltonsReceived || 0}</li>
							<li className="list-group-item">Daltons uitgedeeld: {this.props.amountDaltonsEarned || 0} </li>
							<li className="list-group-item">id: {this.props.id} </li>
						</ul>
					</div> 
        );
    }
}

export default Player


