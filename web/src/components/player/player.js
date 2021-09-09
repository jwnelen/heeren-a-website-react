import React from 'react';
import './player.css'
import RatingDisplay from '../rating-display/rating-display.js'

let link_fed = "https://images2.persgroep.net/rcs/SkRGKcrJ4sDaW0oWOoBQKgW9lYA/diocontent/169326362/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8"

const Player = ({player}) => {
  console.log('player ', player)

  return (
      <div className="card player">
        <a href={"/players/" + player.player_id}>
          <img className="card-img-top" src={link_fed} alt="player"/>
        </a>
        <div className="card-body">
          <a href={"/players/" + player.player_id}><h3
              className="card-title">{player.nickname || ""}</h3></a>
          <p className="card-text text-secondary mb-1 font-italic font-light">{player.name || ""}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <RatingDisplay
                  ratingSingles={player.singles_rating}
                  ratingDoubles={player.doubles_rating}
                  ratingSinglesEndingYear={player.singles_rating_ending_year}
                  ratingDoublesEndingYear={player.doubles_rating_ending_year}>
              </RatingDisplay>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default Player


