import React, {Component} from 'react';
import './daltonEditor.css'
import api from '../../data/api.js'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class daltonEditor extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
      daltonData: {},
			playerData: [],
      isLoading: true,
      dateIsInvalid: false,
			reasonIsInvalid: false,
			playerChoiceIsInvalid: false
    };
		
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	
	handleInputChange(event) {
		const target = event.target;
		const identifier = target.id;
		const value = target.value; // ? +target.value : target.value; //convert to number if is a number
		console.log('value changed: ' + value);
		
		let newDaltonData = this.state.daltonData;
		newDaltonData[identifier] = value;
		
		this.setState({ 
								daltonData: newDaltonData
					});
	}
	
	handleClick = () => {
		const expression1 = /^((?:19|20)\d\d)[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])/;
		let validDate = expression1.test(this.state.daltonData.date_earned);
		let validReason = this.state.daltonData.reason.length > 0;
		let validPlayer = this.state.daltonData.person_earned_id > 0;
		
		this.setState({
			dateIsInvalid: !validDate,
			reasonIsInvalid: !validReason,
			playerChoiceIsInvalid: !validPlayer
    });
		
//		api.addDalton(this.state.daltonData)
//		window.location.reload(false)
		
	}
	
	
	componentDidMount() {
		api.getPlayers().then(data => {
			this.setState({ 
								playerData: data, 
					});
		})		
		
		const defaultNewDalton = {
			date_earned: "",
    	reason: "",
    	person_earned_id: 0
		}
		
		this.setState({ 
								daltonData: defaultNewDalton, 
								isLoading: false 
					});		
	}
	
	render(props) {
		return (
			<Container>
			{ Object.keys(this.state.daltonData).length === 0 ?
									<p>no data to display </p> :
				<Form noValidate>
					<Row className="justify-content-center align-items-start p-3 ">
						<Col>
										<Form.Group>

							<Form.Label className="" htmlFor="inlineFormCustomSelectPref">
						Verdiend door
					</Form.Label>
						
					<Form.Control
						as="select"
						id="person_earned_id"
						onChange={this.handleInputChange}
						custom
						className='m-0'
						isInvalid={this.state.playerChoiceIsInvalid}
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
							<Form.Control.Feedback type="invalid">
                  Choose your player
            </Form.Control.Feedback>
							</Form.Group>
							</Col>
						<Col md={4}>
					<Form.Group>
						<Form.Label >Reason</Form.Label>
						<Form.Control 
							value={this.state.daltonData.reason} 
							onChange={this.handleInputChange}
							id="reason"
							isInvalid={this.state.reasonIsInvalid}
							as="textarea" rows="1" />
							<Form.Control.Feedback type="invalid">
                  Reason should not be empty
            </Form.Control.Feedback>
					</Form.Group>
							</Col>
						<Col>
					<Form.Group>
						<Form.Label>Verdient op</Form.Label>
						<Form.Control 
							value={this.state.daltonData.date_earned} 
							onChange={this.handleInputChange}
							isInvalid={this.state.dateIsInvalid}
							id="date_earned"
							placeholder="2020-01-01"
							/>
						<Form.Control.Feedback type="invalid">
                  Date should be of format YYYY-MM-DD
            </Form.Control.Feedback>
					</Form.Group>
							</Col>
						<Col md={2} className="my-auto">
					 <Button variant="primary" onClick={this.handleClick}> Submit </Button>
							</Col>
					</Row>
				</Form>
				}
			</Container>

			);
	}
}

export default daltonEditor