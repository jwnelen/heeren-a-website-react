import React, {useState} from 'react';

const Form = ({currentDalton, onSubmit}) => {
  const [daltonId, setDaltonId] = useState(currentDalton?.dalton_id || -1)
  const [reason, setReason] = useState(currentDalton?.reason || "")
  const [personTookId, setPersonTookId] = useState()

  const handleDeleteDalton = (e) => {
    event.preventDefault();
    onSubmit({daltonId, reason, personTookId})
  }
  const options = [1, 2, 3].map((i) => (
      <option value={i} key={i}>{i}</option>
  ))

  // let options = Object.keys(players).map( function(key) {
  // 	return <option key={key} value={key}>{players[key]}</option>
  // });

  const confirmButtons =
      <div className="form-group">
        {daltonId === -1 ?
            <button className="form-control btn btn-primary" type="submit">
              Add Dalton!
            </button> :
            <div className="row justify-content-around">
              <div className='col-6'>
                <button className="form-control btn btn-primary" type="submit">
                  Confirm
                </button>
              </div>
              <div className='col-6'>
                <button className="form-control btn btn-danger" type="button" onClick={(e) => handleDeleteDalton}>
                  Delete Dalton
                </button>
              </div>
            </div>
        }
      </div>

  return (
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="reason">Reden</label>
          <input
              className="form-control"
              id="reason"
              name="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="playerTook">Genomen door</label>
          <select
              className="form-control"
              id="playerTook"
              name="person_took_id"
              value={personTookId}
              onChange={(e) => setPersonTookId(e.target.value)}>
            <option value={0}>Choose...</option>
            {options}
          </select>
        </div>
        {confirmButtons}
      </form>
  )
}

export default Form