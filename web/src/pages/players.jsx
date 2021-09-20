import React, {useEffect, useState} from 'react';
import api from '../data/api.js'
import {Wrapper} from "../components/UI";
import PlayersList from "../components/playerGrid/PlayersList";
import PageLayout from "layouts/page"

const Players = () => {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    api.getPlayers().then(p => {
      setPlayers(p)
    })
  }, [])

  return (
      <PageLayout>
        <Wrapper>
          <h1>Team Heeren-A</h1>
          <PlayersList players={players}/>
        </Wrapper>
      </PageLayout>
  )
}
export default Players
// class Team extends Component {
//
// 	constructor(props) {
// 		super(props);
//
// 		this.state = {
// 			playerData: [],
//       isLoading: true,
// 			errors: [],
//     };
// 	}
//
//
// 	componentDidMount() {
// 		api.getPlayers()
// 			.then(data => {
// 				if(data) {
// 					this.setState({
// 									playerData: data,
// 									isLoading: false
// 						});
// 				} else {
// 					console.log('data is undefined')
// 				}
// 			})
// 	}
//
// 	render() {
// 		const {isLoading, playerData} = this.state;
//
// 		if(isLoading) {
// 			return <h3 className='mt-4'>loading...</h3>;
// 		} else {
// 			return (
// 					<div>
// 						<h1>Team Heeren-A</h1>
// 						<PlayerGrid players={playerData}></PlayerGrid>
// 					</div>
// 					)
// 			}
// 	}
// }
// export default Team
    