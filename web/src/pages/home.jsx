import React, {useEffect, useState} from 'react';
import {useFormState} from "react-use-form-state";
import api from "../data/api";
import AuthService from "../services/auth.service";

export const Home = () => {

  const [formState, {text}] = useFormState();
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(AuthService.getCurrentUser());
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handling submit')
    console.log(formState)
    const dalton = formState.values

    api.addDalton(dalton)
			.then(res => {
				if(res.status === 200) {
					// self.getDaltonsData()
					window.alert("Dalton is added!");
				} else {
					window.alert("Could not add dalton");
				}
			});
  }

  const options = [1, 2, 3].map((i) => (
      <option value={i} key={i}>{i}</option>
  ))

  return (
      <div>
        <div className='container'>
          <h2>Welkom op de Heeren A Dalton turver</h2>
          <form onSubmit={user === null ? handleSubmit : null}>
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
            <button className="form-control btn btn-primary"
                    disabled={!user}
                    onClick={handleSubmit}>
              Add Dalton!
            </button>
          </form>
        </div>
      </div>
  )
}

export default Home


    