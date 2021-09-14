import React, {useEffect, useState} from 'react';
import Modal from "components/daltonEditor/modal/modal";
import {useFormState} from "react-use-form-state";
import AuthService from "../../../services/auth.service";

const DaltonForm = ({currentDalton, onSubmit, ...props}) => {
  const [daltonId, setDaltonId] = useState(currentDalton?.dalton_id || -1)
  // const [reason, setReason] = useState(currentDalton?.reason || "")
  // const [personTookId, setPersonTookId] = useState()

  const [formState, {text}] = useFormState();
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(AuthService.getCurrentUser());
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    const dalton = formState.values
    onSubmit({dalton})
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
      <form onSubmit={(e) => user === null ? handleSubmit(e) : null}>
        <div className="form-group">
          <label htmlFor="reason">Reden</label>
          <input
              className="form-control"
              id="reason"
              name="reason"
              {...text("reason")}/>
        </div>
        <div className="form-group">
          <label htmlFor="playerEarned">Gewonnen door</label>
          <select
              className="form-control"
              id="playerEarned"
              {...text("person_earned_id")}
          >
            <option value={0}>Choose...</option>
            {options}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="playerTook">Genomen door</label>
          <select
              className="form-control"
              id="playerTook"
              {...text("person_took_id")}
          >
            <option value={0}>Choose...</option>
            {options}
          </select>
        </div>
        {props}
      </form>
  )
}

export default DaltonForm

      // <form onSubmit={onSubmit}>
      //   <div className="form-group">
      //     <label htmlFor="reason">Reden</label>
      //     <input
      //         className="form-control"
      //         id="reason"
      //         name="reason"
      //         value={reason}
      //         onChange={(e) => setReason(e.target.value)}/>
      //   </div>
      //   <div className="form-group">
      //     <label htmlFor="playerTook">Genomen door</label>
      //     <select
      //         className="form-control"
      //         id="playerTook"
      //         name="person_took_id"
      //         value={personTookId}
      //         onChange={(e) => setPersonTookId(e.target.value)}>
      //       <option value={0}>Choose...</option>
      //       {options}
      //     </select>
      //   </div>
      //   {confirmButtons}
      // </form>
  // )
// }

