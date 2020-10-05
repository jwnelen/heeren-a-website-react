import React, { Component } from 'react';
import DaltonsList from '../components/daltonsList/daltonsList'
import DaltonEditor from '../components/daltonEditor/daltonEditor'

class Daltons extends Component {
	
	state = {
		dalton_id:''
	}
	
	handleDaltonChange = (dal_id) => {
		this.setState({dalton_id: dal_id})
	}
	
	render() {
			return (
					<div>
						<h1>Daltons</h1>
						<DaltonEditor></DaltonEditor>
						<DaltonsList onSelectDalton={this.handleDaltonChange}></DaltonsList>
					</div>
					)
			}
	}
    
export default Daltons
    