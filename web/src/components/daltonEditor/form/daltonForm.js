import React, {useEffect, useState} from 'react';
import {useFormState} from "react-use-form-state";
import AuthService from "services/auth.service";
import api from "data/api";

const DaltonForm = ({currentDalton, onSubmit, buttons}) => {
  const [daltonId, setDaltonId] = useState(currentDalton?.dalton_id || -1)
  // const [reason, setReason] = useState(currentDalton?.reason || "")
  // const [personTookId, setPersonTookId] = useState()

  const [formState, {text}] = useFormState(currentDalton);
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(AuthService.getCurrentUser());
  }, [])


  const addDalton = (e) => {
    e.preventDefault();
    const dalton = formState.values
    api.addDalton(dalton)
        .then( res => {
          if (res.status === 200) {
            // self.getDaltonsData()
            window.alert("Dalton is added!");
          } else {
            window.alert("Could not add dalton");
          }
        }
    )
  }

  const saveDalton = (e) => {
    e.preventDefault();
    const dalton = formState.values
    console.log(dalton)

    api.updateDalton(dalton)
        .then( res => {
              if (res.status === 200) {
                onSubmit()
                window.alert("Dalton is Edited");
              } else {
                window.alert("Could not save dalton");
              }
            }
        )
  }

  const options = [1, 2, 3].map((i) => (
      <option value={i} key={i}>{i}</option>
  ))

  // let options = Object.keys(players).map( function(key) {
  // 	return <option key={key} value={key}>{players[key]}</option>
  // });

  return (
      <form>
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
        <div>
          {buttons.includes("add") && <button
              className="form-control btn btn-primary"
              onClick={addDalton}>
            Add Dalton!
          </button>}
          {buttons.includes("save") && <button
              className="form-control btn btn-primary"
              onClick={saveDalton}>
            Save
          </button>}
        </div>
      </form>
  )
}

export default DaltonForm

