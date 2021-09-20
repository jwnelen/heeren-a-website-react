import React, {useEffect, useState} from 'react';
import DaltonForm from "components/daltonEditor/form/daltonForm"
import api from "../data/api";
import PageLayout from "layouts/page"

export const Home = () => {

  const [players, setPlayers] = useState()

  useEffect(() => {
    api.getPlayers().then(p => setPlayers(p))

  }, [])

  return (
      <PageLayout>
        <div className=''>
          <h2>Welkom op de Heeren A Dalton turver</h2>
          <DaltonForm players={players} buttons={["add"]}/>
        </div>
      </PageLayout>
  )
}

export default Home


    