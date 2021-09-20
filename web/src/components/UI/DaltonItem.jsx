import React from 'react';
import './DaltonItem.scss'
import 'moment/locale/nl'
import moment from "moment";
import {Card} from "./index";
import {Button} from "@material-ui/core";

const DaltonItem = ({dalton, players, onEditDalton}) => {
  // let {index, players, loggedIn} = this.props;

  console.log('players,', players)
  const getPlayersName = (id) => {
    return `${players.filter((pl) => pl.id === id)[0]?.nickname || ""}`;
  }

  return (
      <Card>
        <div className="flex-column">
          <div className="flex justify-center">
            <h4 className="font-weight-bold  mb-1">
              {dalton.reason}
            </h4>
          </div>
          <div className="flex justify-space-around">
            <div>
              genomen door {getPlayersName(dalton.p_took_id) || ""}
            </div>
            <div>
              gewonnen op {dalton.date_earned ? moment(dalton.date_earned).format('dddd DD MMMM YYYY') : ''}
            </div>
          </div>
          <div className="flex justify-space-around ">
            <div>
              gewonnen door {getPlayersName(dalton.p_earned_id) || ""}
            </div>
            <div>
              genomen op {dalton.date_took ? moment(dalton.date_took).format('dddd DD MMMM YYYY') : 'Nog niet genomen!'}
            </div>
          </div>
          <div>
            <Button variant="transparent" className='p-0' id={dalton.id} onClick={onEditDalton}>
              <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-pencil-square"
                   fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg>
            </Button>
          </div>
        </div>
      </Card>
  )
}

export default DaltonItem
			
