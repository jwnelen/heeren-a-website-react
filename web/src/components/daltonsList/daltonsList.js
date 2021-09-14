import React, {useEffect} from 'react';
import './daltonsList.css'
import AuthService from "../../services/auth.service";
import "../daltonsListRow/daltonItem"
import DaltonItem from "../daltonsListRow/daltonItem";
const daltonList = ({daltons, players}) => {
  let user;

  const editDalton = (index) => {
    console.log("index", index)
  }

  const renderRows = (
      daltons.map((d, i) =>
          <DaltonItem dalton={d} onEditDalton={() => editDalton(i)}/>
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

