import React from 'react';
import './DaltonItem.scss'
import 'moment/locale/nl'
import moment from "moment";
import {Card} from "./index";
import {Button} from "@material-ui/core";
import AuthService from "../../services/auth.service";

const DaltonItem = ({dalton, players, onEditDalton}) => {
  // let {index, players, loggedIn} = this.props;

  const getPlayersName = (id) => {
    return `${players.filter((pl) => pl.id === id)[0]?.nickname || ""}`;
  }

  const user = AuthService.getCurrentUser() || null;

  let dateDisplay = dalton.date_took ? dalton.date_took : dalton.date_earned;
  dateDisplay = dateDisplay ? moment(dateDisplay).format('DD-MM-YYYY') : '-'

  const tookBy2 = dalton.p_took_id ?
      dalton.date_took ?
          `Genomen door ${getPlayersName(dalton.p_took_id)}` :
          `Nog niet genomen door ${getPlayersName(dalton.p_took_id)}`
      : `Nog niet uitgedeeld`

  const earnedBy = dalton.p_earned_id ?
      `Gewonnen door ${getPlayersName(dalton.p_earned_id)}` :
      null

  return (
      <Card className="px-10 py-4">
        <div className="flex flex-col">
          <div className="flex justify-space-between items-center">
            <h3 className="font-weight-bold">
              {dalton.reason}
            </h3>
            <h4 className="p-2">
              {dateDisplay}
            </h4>
          </div>
          <div className="flex flex-col items-flex-start">
            <div>
              {tookBy2}
            </div>
            {earnedBy && earnedBy}
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

