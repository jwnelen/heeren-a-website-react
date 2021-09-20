import React, {useEffect, useState} from 'react';
import DaltonsList from 'components/daltonsList/daltonsList'
import PageLayout from "layouts/page"

import api from '../data/api.js'

export default () => {

  const [daltons, setDaltons] = useState([])
  const [players, setPlayers] = useState([])
  // const [currentDalton, setCurrentDalton] = useState()

  useEffect(() => {
    api.getDaltons().then(d => {
      setDaltons(d)
    })

    api.getPlayers().then(p => setPlayers(p))
  }, [])

  const handleDaltonChange = () => {
    window.location.reload()
  }

  return (
      <PageLayout>
        <h1>Daltons</h1>
        <DaltonsList daltons={daltons} players={players} onDaltonChange={handleDaltonChange}/>
      </PageLayout>
  )
}
