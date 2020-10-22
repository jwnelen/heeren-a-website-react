import React, { Component } from 'react';
import DaltonsList from '../components/daltonsList/daltonsList'
import {Container} from '../components/daltonEditor/container/container'

import api from '../data/api.js'

class Daltons extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			daltons: [],
			players: [],
			currentDalton: {},
      isLoading: true,
			errors: [],
    };
	}
	
	componentDidMount() {
		this.getDaltonsData();
		this.getPlayersData();
	}
	
	handleDaltonChange = (dalton) => {
		this.setState({currentDalton: dalton})
		this.child.showModal();
	}
	
	getDaltonsData = () => {
		api.getDaltons()
			.then(daltonsData => {
				this.setState({
					daltons: daltonsData
					});
				}
			)
	}
	
	getPlayersData = () => {
		api.getPlayersIdAndName()
			.then(playersData => {
								this.setState({ 
									players: playersData,
									isLoading: false 
							});
		})
	}
	
	clearDalton = () => {
		this.setState({
			currentDalton: {}
		})
	}
	
	onSubmit = (event, dalton, deletion = false) => {
    event.preventDefault(event);
		const self = this;
		
		// Delete Dalton
		if(deletion) {
			api.deleteDalton(dalton)
				.then(res => {
					if(res.status === 200) {
						self.child.closeModal()
						self.getDaltonsData()
						window.alert("Dalton is deleted!");
					} else {
						window.alert("Could not delete dalton");
					}
				})
		} else {
		
		// Add Dalton
		if(dalton.dalton_id === null || dalton.dalton_id === -1) {
			delete dalton['dalton_id'];
			
			api.addDalton(dalton)
			.then(res => {
				if(res.status === 200) {
					self.child.closeModal()
					self.getDaltonsData()
					window.alert("Dalton is added!");
				} else {
					window.alert("Could not add dalton");
				}
			});
		} else { // Edit Dalton
			api.updateDalton(dalton)
				.then(res => {
					if(res.status === 200) {
						self.child.closeModal()
						self.getDaltonsData()
						window.alert("Dalton is updated!");
					} else {
						window.alert("Could not update dalton");
					}
				});
		}
		}
  };
	
	render() {
		const {isLoading, daltons, players, currentDalton} = this.state;
		
		if(isLoading) {
			return <h3 className='mt-4'>loading...</h3>;
		} else {
			return (
					<div>
						<h1>Daltons</h1>
				    <Container 
							players={players} currentDalton={currentDalton}
							onRefParent={ref => (this.child = ref)} 
							onSubmit={this.onSubmit}
							onClearDalton={this.clearDalton}/>
						<DaltonsList daltons={daltons} players={players} onSelectDalton={this.handleDaltonChange}></DaltonsList>
						
					</div>
				)
		}
	}
}
    
export default Daltons