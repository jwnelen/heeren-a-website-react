import React, {useEffect, useState} from 'react';
import './playerProfile.css'
import api from '../../data/api.js'
import RatingDisplay from '../rating-display/rating-display.js'
import AuthService from "../../services/auth.service";
import {useParams} from 'react-router-dom'
import PageLayout from "layouts/page"

// let link_fed = "https://images2.persgroep.net/rcs/SkRGKcrJ4sDaW0oWOoBQKgW9lYA/diocontent/169326362/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8"

const PlayerProfile = ({playerid}) => {
  const [user, setUser] = useState()
  const [player, setPlayer] = useState({})

  useEffect(() => {
    setUser(AuthService.getCurrentUser());

    console.log(playerid)

    api.getPlayerById(playerid).then(pl => {
      if (pl) {
        console.log(pl)
        setPlayer(pl)
      }
    })
  }, [])

  return (
      <PageLayout>
        <div className="card container">
          <div className="card-body player">
            <h3 className="card-title">{player.nickname || "-"}</h3>
            <p className="card-text text-secondary mb-1 font-italic font-light">{player.name || "-"}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <RatingDisplay
                  ratingSingles={player.singles_rating}
                  ratingDoubles={player.doubles_rating}
                  ratingSinglesEndingYear={player.singles_rating_end}
                  ratingDoublesEndingYear={player.doubles_rating_end}/>
            </li>
            <li className="list-group-item">id: {player.id} </li>
          </ul>
        </div>

      </PageLayout>
  )

}
export default PlayerProfile

{/*<div className='container mt-5'>*/}
{/*	<h3>Quotes</h3>*/}
{/*	<ul className='list-group list-group-flush '>*/}
{/*	{renderQuotes}*/}
{/*	</ul>*/}
{/*</div>*/}

// 		if(!isLoading ) {
// 			posts.forEach(post => {
// 				post.body.split(/[.\n]/).forEach(res => {
// 					if(res.includes(player.nickname) || res.includes(player.name.split(' ')[0] )){
// 						array.push([res.trim(), post.title])
// 					}
// 				})
// 			})
// 			renderQuotes = array.map( ([sentence, title], index) => <li className="list-group-item font-italic" key={index} >"{sentence}. - <b>{title}</b>"</li>)
// 		}
//
// 		if(isLoading) return <p>Loading...</p>
// 		else {
//
// 			);
// 		}
// 	}
// }


// 		api.getPlayerById(id).then(pl => {
// 			api.getPosts()
// 				.then(postsData =>
// 						api.getDaltonsTookByPlayerId(id)
// 							.then(daltookpl => {
//
// 								pl[0].amountDaltonsTook = parseInt(daltookpl.count);
//
// 								this.setState({
// 									posts: postsData,
// 									player: pl[0],
// 									isLoading: false,
// 							})
// 						}
// 				))
// 		})
// 	}


