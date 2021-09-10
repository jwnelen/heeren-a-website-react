import React, {Component} from 'react'
import api from '../data/api.js'
import AuthService from "../services/auth.service"
import EditPlayerProfile from "../components/editPlayerProfile/editPlayerProfile"
import EditUserProfile from "../components/editUserProfile/editUserProfile"

class UserProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      player: {},
      isLoading: true,
      error: null,
      currentUser: AuthService.getCurrentUser()
    };

    this.handleSaveButton = this.handleSaveButton.bind(this);

  }

  componentDidMount() {
    const {currentUser} = this.state;
    console.log(currentUser)
    if (currentUser && currentUser.user_player_id) {
      api.getPlayerById(currentUser.user_player_id)
          .then(player => {
            this.setState({
              player: player[0],
              isLoading: false
            })
          })
    } else {
      this.setState({isLoading: false})
    }
  }

  handleSaveButton(data) {
    api.updatePlayer(this.state.currentUser.user_player_id, data)
  }

  render() {
    const {isLoading, currentUser, player} = this.state;

    if (isLoading) {
      return <h3 className='mt-4'>loading... </h3>
    } else
      return (
          <div className='container'>
            <h2 className="mb-3">User Profile </h2>
            <EditUserProfile user={currentUser} saveProfile={this.handleSaveButton}/>

            <h2 className="mb-3">Player Profile</h2>
            {player.player_id &&
            (<EditPlayerProfile player={player} saveProfile={this.handleSaveButton}/>)}
            {!player.player_id &&
            (<p>This user is not connected to a player. Please request access to edit your player.</p>)}
          </div>
      )
  }
}

export default UserProfile