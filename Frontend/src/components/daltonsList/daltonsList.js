import React, {Component} from 'react';
import DaltonsListRow from '../daltonsListRow/daltonsListRow';
import './daltonsList.css'
import Table from 'react-bootstrap/Table'


							
class daltonsList extends Component {
	renderRows() {
		const {daltons, players} = this.props;
		
		let items = [];
		daltons.forEach( (dalton, index) => {
			items.push(<DaltonsListRow players={players} key={index} index={index} dalton={dalton}> </DaltonsListRow>)
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
							<th>Edit</th>
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

