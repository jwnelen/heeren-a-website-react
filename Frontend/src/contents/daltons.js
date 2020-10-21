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
      isLoading: true,
			errors: [],
    };
	}
	
	componentDidMount() {
		this.getDaltonsData();
		this.getPlayersData();
	}
	
	getDaltonsData = () => {
		api.getDaltons().
			then(daltonsData => {
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
						
	
	onSubmit = (event) => {
    event.preventDefault(event);
		const dalton = {
			person_took_id: event.target.playerTook.value,
			reason: event.target.reason.value
		}
		const self = this;
		api.addDalton(dalton)
			.then(res => {
				if(res.status === 200) console.log('dalton added!')
				self.child.closeModal()
				self.getDaltonsData()
				window.alert("Dalton is added!");
			});
  };
	
	render() {
		const {isLoading, daltons, players} = this.state;
		
		if(isLoading) {
			return <h3 className='mt-4'>loading...</h3>;
		} else {
			return (
					<div>
						<h1>Daltons</h1>
				    <Container players={players} onRefParent={ref => (this.child = ref)} onSubmit={this.onSubmit} />
						<DaltonsList daltons={daltons} players={players} onSelectDalton={this.handleDaltonChange}></DaltonsList>
					</div>
				)
		}
	}
}
    
export default Daltons