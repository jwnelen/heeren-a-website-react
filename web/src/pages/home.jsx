import React from 'react';
import DaltonForm from "components/daltonEditor/form/daltonForm"

export const Home = () => {

  return (
      <div>
        <div className=''>
          <h2>Welkom op de Heeren A Dalton turver</h2>
          <DaltonForm buttons={["add"]}/>
        </div>
      </div>
  )
}

export default Home


    