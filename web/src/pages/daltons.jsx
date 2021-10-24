import React, {useEffect, useState} from 'react';
import DaltonsList from 'components/daltonsList/daltonsList'
import PageLayout from "layouts/page"

import api from '../data/api.js'
import DaltonOverview from "../components/DaltonOverview";

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
        <h2>Genomen per speler</h2>
        <DaltonOverview daltons={daltons} players={players}/>
        <h2 className="mt-4">Meest recent genomen daltons</h2>
        <DaltonsList daltons={daltons} players={players} onDaltonChange={handleDaltonChange}/>
      </PageLayout>
  )
}
