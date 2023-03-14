import React from 'react';
import './Player.css'
import RatingDisplay from '../rating-display/rating-display.js'

const Player = ({player}) => {
  const {id, nickname, name, singles_rating, doubles_rating, singles_rating_end, doubles_rating_end} = player

  return (
      <div className="card player p-4">
        {/*<a href={"/players/" + player.player_id}>*/}
        {/*  <img className="card-img-top" src={link_fed} alt="player"/>*/}
        {/*</a>*/}
        <div className="card-body flex-column space-y-4">
          <a href={"/players/" + id}><h3
              className="card-title">{nickname || "?"}</h3></a>
          <p className="card-text text-secondary mb-1 font-italic font-light">{name || "?"}</p>
          <RatingDisplay
              ratingSingles={singles_rating || "-"}
              ratingDoubles={doubles_rating || "-"}
              ratingSinglesEndingYear={singles_rating_end || "-"}
              ratingDoublesEndingYear={doubles_rating_end || "-"}>
          </RatingDisplay>
        </div>
      </div>
  );
}

export default Player


