import React from 'react'

const DaltonOverview = ({daltons, players}) => {
  const daltonsByPlayer =
      daltons?.reduce((players, dalton) => {
        const player = dalton.p_took_id
        return {
          ...players,
          [player]: (players[player] || 0) + 1
        };
      }, {})

  const daltonOverview = players.map(p => {
    return <p>{p.nickname}: {daltonsByPlayer[p.id] || 0} </p>
  })

  return (
      <div>
        {daltonOverview}
      </div>
  )
}

export default DaltonOverview