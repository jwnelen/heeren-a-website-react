import React, { Component } from 'react';
import DaltonsList from '../components/daltonsList/daltonsList'
import {Container} from '../components/daltonEditor/container/container'
//import DaltonEditor from '../components/daltonEditor/daltonEditor'

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
		api.getDaltons().
			then(daltonsData => {
				if(daltonsData) {
							api.getPlayersIdAndName().then(playersData => {
								console.log('daltons page mounted with data: ' + JSON.stringify(playersData))
								this.setState({ 
									players: playersData,
									daltons: daltonsData,
									isLoading: false 
							});
						})
				} else {
					console.log('data is undefined')
				}
			})
	}
	
	onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.playerTook.value);
  };
	
	render() {
		const {isLoading, daltons, players} = this.state;
		
		if(isLoading) {
			return <h3 className='mt-4'>loading...</h3>;
		} else {
			return (
					<div>
						<h1>Daltons</h1>
				    <Container players={players} onSubmit={this.onSubmit} />
					</div>
				)
		}
	}
}
    
export default Daltons

//						<DaltonsList daltons={daltons} players={players}> </DaltonsList>
// TO USE LATER
//	state = {
//		dalton_id: 0
//	}
//	
//	handleDaltonChange = (dal_id) => {
//		this.setState({dalton_id: dal_id})
//		console.log('other dalton: ' + dal_id)
//	}
    
//						<DaltonEditor dalton_id={this.state.dalton_id}></DaltonEditor>
//						<DaltonsList onSelectDalton={this.handleDaltonChange}></DaltonsList>
