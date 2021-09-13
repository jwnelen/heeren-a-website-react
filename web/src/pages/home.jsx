import React from 'react';
import {useFormState} from "react-use-form-state";

export const Home = () => {

  const [formState, {text}] = useFormState();

  const handleSubmit = (e) => {
    console.log('handling submit')
  }

  return (
      <div>
        <div className='container'>
          <h2>Welkom op de Heeren A Dalton turver</h2>
          {/*<form onSubmit={handleSubmit}>*/}
          {/*  <div className="form-group">*/}
          {/*    <label htmlFor="reason">Reden</label>*/}
          {/*    <input*/}
          {/*        className="form-control"*/}
          {/*        id="reason"*/}
          {/*        name="reason"*/}
          {/*        {...text("reason")}/>*/}
          {/*  </div>*/}
          {/*</form>*/}
        </div>
      </div>
  )
}

export default Home


    