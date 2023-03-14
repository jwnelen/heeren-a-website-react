import React, {useEffect, useState} from 'react'
import api from '../data/api.js'
import AuthService from "../services/auth.service"
import EditUserProfile from "../components/UI/editUserProfile"
import PageLayout from "layouts/page"
import {Wrapper} from "../components/UI";

const UserProfile = () => {
  const [user, setUser] = useState()
  const [player, setPlayer] = useState()


  console.log('userprofile')

  useEffect(() => {
    console.log('got here')
    setUser(AuthService.getCurrentUser());
    if (user?.user_player_id) {
      api.getPlayers().then((pl) => {
        const p = pl.filter((p) => p.id === user.user_player_id)
        if (p.length === 1) {
          setPlayer(p[0])
        }

      })
    }
  }, [])

  return (
      <PageLayout>
        <Wrapper size="4xl" className="flex flex-column space-y-2">
          <h2 className="mb-3">User Profile </h2>
          <EditUserProfile user={user}/>
          <h2 className="mb-3">Player Profile</h2>
          {/*{player?.id && <EditPlayerProfile player={player}/>}*/}
          {!player?.id &&
          (<p>This user is not connected to a player. Please request access to edit your player.</p>)}
        </Wrapper>
      </PageLayout>
  )
}
export default UserProfile
