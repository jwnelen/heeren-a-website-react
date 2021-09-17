import React, {useEffect, useState} from 'react';
import './daltonsList.css'
import AuthService from "../../services/auth.service";
import "../UI/DaltonItem"
import DaltonItem from "../UI/DaltonItem";
import DaltonForm from "../daltonEditor/form/daltonForm";

const daltonList = ({daltons, players, onDaltonChange}) => {
  let user;
  const [isEditing, setIsEditing] = useState(false)
  const [currentDalton, setCurrentDalton] = useState(null)

  useEffect(() => {
    user = AuthService.getCurrentUser()
  }, [])

  const editDalton = (index) => {
    let isE = isEditing
    setIsEditing(!isE)
    setCurrentDalton(isE ? null : index)
  }

  const onSubmit = () => {
    onDaltonChange();
  }


  const editDaltonForm = () => {
    const d = daltons[currentDalton]

    return (
        <>
          <DaltonForm currentDalton={d} onSubmit={onSubmit} buttons={["save", "delete"]}/>
        </>
    )
  }

  const renderRows = (
      daltons.map((d, i) =>
          <>
            <DaltonItem dalton={d} onEditDalton={() => editDalton(i)}/>
            {(isEditing && currentDalton === i) ?
                editDaltonForm() : <></>}
          </>
      )
  )

  return (
      <div className="container">
        {renderRows}
      </div>
  )
}

export default daltonList

