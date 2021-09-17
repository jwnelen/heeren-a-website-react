import React, {useEffect, useState} from 'react';
import DaltonsList from 'components/daltonsList/daltonsList'

import api from '../data/api.js'

export default () => {

  const [daltons, setDaltons] = useState([])
  // const [players, setPlayers] = useState()
  // const [currentDalton, setCurrentDalton] = useState()

  useEffect(() => {
    api.getDaltons().then(d => {
      setDaltons(d)
    })

    // this.getPlayersData();
  }, [])

  const handleDaltonChange = () => {
    window.location.reload()
  }

  return (
      <div>
        <h1>Daltons</h1>
        <DaltonsList daltons={daltons} players={players} onDaltonChange={handleDaltonChange}/>
      </div>
  )
}
