import React from 'react';
import {useFormState} from "react-use-form-state";
import api from "../data/api";
import DaltonForm from "components/daltonEditor/form/daltonForm"

export const Home = () => {

  const [formState, {text}] = useFormState();


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handling submit')
    console.log(formState)
    const dalton = formState.values

    api.addDalton(dalton)
        .then(res => {
          if (res.status === 200) {
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

  const addDaltonButton = () => {
    return (
        <p>test </p>
    )
  }


  return (
      <div>
        <div className='container'>
          <h2>Welkom op de Heeren A Dalton turver</h2>
          <DaltonForm/>
        </div>
      </div>
  )
}

export default Home


    