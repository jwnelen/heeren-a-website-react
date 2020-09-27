import React, {Component} from 'react';
import './daltonsList.css'
import api from '../../data/api.js'
import Table from 'react-bootstrap/Table'
import moment from 'moment'
import 'moment/locale/nl'
							
function DaltonListFactory(data) {
	console.log('dalton factory' + JSON.stringify(data))
	const daltons = data.data.daltons;
	const players = data.data.players;
	
	const items = daltons.map( (dalton, index) => 
		<tr key={index}>
      <td>{index}</td>
      <td>{players[dalton.person_earned_id]}</td>
      <td>{dalton.reason}</td>
      <td>{players[dalton.person_took_id]}</td>
      <td>{moment(dalton.date_earned).locale('nl').format('dddd DD MMMM YYYY')}</td>
      <td>{moment(dalton.date_taken).locale('nl').format('dddd DD MMMM YYYY')}</td>
    </tr>
														 );
															
	const table = 
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>#</th>
						<th>Verdiend</th>
						<th>Reden</th>
						<th>Gekregen</th>
						<th>Datum verdient</th>
						<th>Datum genomen</th>
					</tr>
				</thead>
				<tbody>
				{items}
				</tbody>
			</Table>													
		return table
}		

class daltonsList extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      daltons: [],
			players: [],
      isLoading: true,
      error: null,
    };
  }					
	
	componentDidMount() {
		api.getDaltons().then(data => {
			console.log(JSON.stringify(data))
			this.setState({ 
								daltons: data, 
								isLoading: false 
					});
		})
		
		api.getPlayersIdAndName().then(data => {
			console.log(JSON.stringify(data))
			this.setState({ 
								players: data, 
								isLoading: false 
					});
		})
	}
	
    render(props) {
        return(
					<div>
						<div className="container">
							{ this.state.isLoading === true ?
									<p>no data to display </p> :
										<DaltonListFactory data={this.state}></DaltonListFactory>
								}
						</div>
					</div>
        );
    }
}

export default daltonsList

