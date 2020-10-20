import React, {Component} from 'react';
import './daltonsListRow.css'
import Button from 'react-bootstrap/Button'
import moment from 'moment'
import 'moment/locale/nl'

class DaltonsListRow extends Component {
	constructor(props) {
    super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick = (e) => {
		console.log('handle click', e.target.id);
	}
	
	render(props) {
		const {dalton, index, players} = this.props;
		
		return(
		<tr>
      <td>{index}</td>
      <td>{players[dalton.person_earned_id] ? players[dalton.person_earned_id] : '-' }</td>
      <td>{dalton.reason}</td>
      <td>{players[dalton.person_took_id]}</td>
      <td>{
					dalton.date_earned ? moment(dalton.date_earned).locale('nl').format('dddd DD MMMM YYYY') : ''}</td>
   		<td>{
					dalton.date_taken ? moment(dalton.date_taken).locale('nl').format('dddd DD MMMM YYYY') : ''}</td>
			<td>
				<Button variant="transparent" id={dalton.dalton_id} onClick={this.handleClick}>
					<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
					</svg>
				</Button>
			</td>
  	</tr> 
		)
	}
}

export default DaltonsListRow
			
