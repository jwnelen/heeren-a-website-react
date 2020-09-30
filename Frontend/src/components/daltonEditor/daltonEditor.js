import React, {Component} from 'react';
import './daltonEditor.css'
import api from '../../data/api.js'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class daltonEditor extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
      daltonData: {
				
			},
			playerData: [],
      isLoading: true,
      error: null,
    };
		
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	
	handleInputChange(event) {
		const target = event.target;
		const identifier = target.id;
		const value = +target.value ? +target.value : target.value; //convert to number if is a number
		console.log('value changed: ' + value);
		
		let newDaltonData = this.state.daltonData;
		newDaltonData[identifier] = value;
		
		this.setState({ 
								daltonData: newDaltonData
					});
		
	}
	
	handleClick = () => {
		console.log('handle click');
		console.log(JSON.stringify(this.state.daltonData))
		api.addDalton(this.state.daltonData)
		window.location.reload(false);
		
	}
	
	componentDidMount() {
		
		api.getPlayers().then(data => {
			this.setState({ 
								playerData: data, 
								isLoading: false 
					});
		})		
		
		console.log('added players data: ' + this.state.playerData);
		
		const dalton = {
			date_earned: "2020-06-06",
    	reason: "test reason from dalton editor",
    	person_earned_id: 3
		}
		
		this.setState({ 
								daltonData: dalton, 
								isLoading: false 
					});		
		// api.addDalton(dalton);
	}
	
	render(props) {
		return (
			<div>
			{ Object.keys(this.state.daltonData).length === 0 ?
									<p>no data to display </p> :
				<Form inline>
					<Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
						Verdiend door
					</Form.Label>
					
					<Form.Control
						as="select"
						className="my-1 mr-sm-2"
						id="person_earned_id"
						onChange={this.handleInputChange}
						custom
						value={this.state.daltonData.person_earned_id}
					>
					<option value={0}>Choose...</option>
					{( 
							this.state.playerData.map( (player, index) => {
								return <option 
									key={index} 
									value={player.id}
									>{player.nickname}
								</option> }
														 )
											)}
					</Form.Control>
					<Form.Group>
						<Form.Label >Reason</Form.Label>
						<Form.Control 
							value={this.state.daltonData.reason} 
							onChange={this.handleInputChange}
							id="reason"
							as="textarea" rows="3" />
					</Form.Group>
					<Form.Group>
						<Form.Label >Verdient op</Form.Label>
						<Form.Control 
							value={this.state.daltonData.date_earned} 
							onChange={this.handleInputChange}
							id="date_earned"
							/>
					</Form.Group>
					 <Button variant="primary" onClick={this.handleClick}> Submit </Button>
				</Form>
				}
				</div>

			);
	}
}

export default daltonEditor