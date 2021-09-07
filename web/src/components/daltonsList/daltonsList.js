import React, {Component} from 'react';
import DaltonsListRow from '../daltonsListRow/daltonsListRow';
import './daltonsList.css'
import Table from 'react-bootstrap/Table'
import AuthService from "../../services/auth.service";


class daltonsList extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			currentUser: AuthService.getCurrentUser()
		}
	}

	renderRows() {
		const {daltons, players} = this.props;
		
		let items = [];
		daltons.forEach( (dalton, index) => {
			items.push(<DaltonsListRow 
								 onSelectCurrentDalton={this.props.onSelectDalton} 
								 players={players} 
								 key={index} 
								 index={index} 
								 loggedIn={this.state.currentUser ? true : false}
								 dalton={dalton}> </DaltonsListRow>)
		});
			
		return items
	}

	render(props) {
		return(
			<div className="container">
				<Table responsive striped bordered hover size="sm">
					<thead>
						<tr>
							<th>#</th>
							<th>Verdiend</th>
							<th>Reden</th>
							<th>Genomen door</th>
							<th>Datum verdient</th>
							<th>Datum genomen</th>
							{this.state.currentUser && <th>Edit</th>}
						</tr>
					</thead>
					<tbody>
						{ this.renderRows() }
					</tbody>
				</Table>
			</div>
		);
	}
}

export default daltonsList

