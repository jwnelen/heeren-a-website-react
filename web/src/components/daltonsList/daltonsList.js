import React, {useEffect, useState} from 'react';
import './daltonsList.css'
import AuthService from "../../services/auth.service";
import "../daltonsListRow/daltonItem"
import DaltonItem from "../daltonsListRow/daltonItem";

const daltonList = ({daltons, players, onDaltonChange}) => {
  let user;
  const [isEditing, setIsEditing] = useState(false)
  const [currentDalton, setCurrentDalton] = useState(null)

  const editDalton = (index) => {
    let isE = isEditing
    setIsEditing(!isE)
    setCurrentDalton(isE ? null : index)
  }

  const editDaltonForm = () => {

    return (
        <>
          <p>Editing dalton</p>

          <button
              className="btn btn-info btn-block"
              onClick={() => onDaltonChange(currentDalton)}
          >Opslaan</button>
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

  useEffect(() => {
    user = AuthService.getCurrentUser()
  }, [])

  return (
      <div className="container">
        {renderRows}
      </div>
  )
}

export default daltonList

