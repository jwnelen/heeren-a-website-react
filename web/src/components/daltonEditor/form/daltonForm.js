import React, {useEffect, useState} from 'react';
import {useFormState} from "react-use-form-state";
import AuthService from "services/auth.service";
import api from "data/api";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import Wrapper from "../../UI/Wrapper";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const DaltonForm = ({currentDalton, onSubmit, buttons}) => {
  const [daltonId, setDaltonId] = useState(currentDalton?.dalton_id || -1)
  // console.log("current", currentDalton)

  const [formState, {text, raw}] = useFormState(currentDalton);
  formState.date_earned = currentDalton ? new Date(currentDalton.date_earned) : new Date()
  console.log('date earned is ', formState.date_earned)

  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(AuthService.getCurrentUser());
  }, [])


  const addDalton = (e) => {
    e.preventDefault();
    const dalton = formState.values
    console.log("daton in add", dalton)
    api.addDalton(dalton)
        .then(res => {
              if (res.status === 200) {
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

    api.updateDalton(dalton)
        .then(res => {
              if (res.status === 200) {
                onSubmit()
                window.alert("Dalton is Edited");
              } else {
                window.alert("Could not save dalton");
              }
            }
        )
  }

  const deleteDalton = (e) => {
    e.preventDefault();
    const dalton = formState.values
    api.deleteDalton(dalton)
        .then(res => {
              if (res.status === 200) {
                onSubmit()
                window.alert("Dalton is Deleted");
              } else {
                window.alert("Could not delete dalton");
              }
            }
        )
  }


  const options = [1, 2, 3].map((i) => (
      <MenuItem value={i} key={i}>{i}</MenuItem>
  ))

  // let options = Object.keys(players).map( function(key) {
  // 	return <option key={key} value={key}>{players[key]}</option>
  // });

  return (
      <Wrapper>
        <TextField
            fullwidth
            variant="outlined"
            label="reden"
            {...text("reason")}/>
        <div>
          <FormControl sx={{m: 1, minWidth: 2000}}>
            <InputLabel id={"person_earned_id"}>Gewonnen door</InputLabel>
            <Select
                autoWidth
                labelId={"person_earned_id"}
                {...text("person_earned_id")}
            >
              {options}
            </Select>
          </FormControl>
        </div>

        <div>
          <FormControl fullwidth>
            <InputLabel id={"person_took_id"}>Genomen door</InputLabel>
            <Select
                labelId={"person_took_id"}
                {...text("person_took_id")}
            >
              {options}
            </Select>
          </FormControl>
        </div>
        <div>
          <DatePicker
              {...raw({
                name: "date_earned",
                onChange: date => date.toString()
              })}
              selected={formState.date_earned}
          />
        </div>
        <div>
          {buttons.includes("add") && <Button
              variant="contained"
              onClick={addDalton}>
            Add Dalton!
          </Button>}
          {buttons.includes("save") && <Button
              variant="contained"
              onClick={saveDalton}>
            Save
          </Button>}
          {buttons.includes("delete") && <Button
              variant="contained"
              color="error"
              className={"btn btn-warning"}
              onClick={deleteDalton}>
            Delete
          </Button>}
        </div>
      </Wrapper>
  )
}

export default DaltonForm

