import React, {useEffect, useState} from 'react';
import {useFormState} from "react-use-form-state";
import AuthService from "services/auth.service";
import api from "data/api";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import Wrapper from "../../UI/Wrapper";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const DaltonForm = ({currentDalton, players = [], onSubmit, buttons}) => {

  const [formState, {text}] = useFormState({
    reason: currentDalton?.reason || "",
    p_earned_id: currentDalton?.p_earned_id || "",
    p_took_id: currentDalton?.p_took_id || "",
    date_earned: currentDalton ? new Date(currentDalton.date_earned) : new Date(),
    date_took: currentDalton ? new Date(currentDalton.date_took) : new Date(),
    id: currentDalton?.id || null
  });

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

  const options = players.map((p) => (
      <MenuItem key={`${p.id}-${p.nickname}`} value={p.id}>{p.nickname}</MenuItem>
  ))

  return (
      <Wrapper className="space-y-10">
        <FormControl fullWidth>
          <TextField
              variant="outlined"
              label="reden"
              {...text("reason")}/>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id={"p_earned_id"}>Gewonnen door</InputLabel>
          <Select
              value={formState.values.p_earned_id || ""}
              label={"Gewonnen door"}
              labelId={"p_earned_id"}
              onChange={(e) => formState.setField('p_earned_id', e.target.value)}
          >
            <MenuItem value="">
              <em>Niemand</em>
            </MenuItem>
            {options}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id={"p_took_id"}>Genomen door</InputLabel>
          <Select
              value={formState.values.p_took_id || ""}
              label={"Genomen door"}
              labelId={"p_took_id"}
              onChange={(e) => formState.setField('p_took_id', e.target.value)}
          >
            <MenuItem value="">
              <em>Niemand</em>
            </MenuItem>
            {options}
          </Select>
        </FormControl>
        <div className="mx-1 my-2 full-w">
          <FormControl>
            <InputLabel id={"date_earned"}>Datum gewonnen</InputLabel>
            <DatePicker
                labelId={"date_earned"}
                selected={formState.values.date_earned}
                isClearable
                onChange={(e) => formState.setField("date_earned", e)}
            />
          </FormControl>
        </div>
        <div className="mx-1 my-2 full-w">
          <FormControl>
          <InputLabel id={"date_took"}>Datum genomen</InputLabel>
          <DatePicker
              labelId={"date_took"}
              selected={formState.values.date_took}
              isClearable
              onChange={(e) => formState.setField("date_took", e)}
          />
          </FormControl>
        </div>
        <div>
          {buttons.includes("add") && <Button
              variant="contained"
              disabled={!user}
              onClick={addDalton}>
            Dalton toevoegen
          </Button>}
          {buttons.includes("save") && <Button
              variant="contained"
              disabled={!user}
              onClick={saveDalton}>
            Opslaan
          </Button>}
          {buttons.includes("delete") && <Button
              variant="contained"
              className={"btn btn-warning"}
              disabled={!user}
              onClick={deleteDalton}>
            Verwijder
          </Button>}
        </div>
      </Wrapper>
  )
}

export default DaltonForm

