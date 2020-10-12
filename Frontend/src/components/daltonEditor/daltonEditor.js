import React, {Component } from 'react';
import './daltonEditor.css'
import api from '../../data/api.js'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

const defaultNewDalton = {
			date_earned: "",
    	date_taken: "",
			reason: "",
    	person_earned_id: "0",
			person_took_id: "0",
			dalton_id: null
		}

class daltonEditor extends Component {

	constructor(props) {
		super(props);
		
		
		this.state = {
			open: false,
      daltonData: {},
			playerData: [],
      isLoading: true,
			errors: [],
    };
		
		this.handleInputChange = this.handleInputChange.bind(this);
		this.toggleEditor = this.toggleEditor.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		
		let newDaltonData = this.state.daltonData;
		newDaltonData[target.id] = target.value;
		
		this.setState({ 
								daltonData: newDaltonData
					});
	}
	
	handleClick = () => {
		const dateRegex = /^((?:19|20)\d\d)[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])/;
		let dalton = this.state.daltonData;
		
		let validDateEarned = dalton.date_earned.length > 0 ? dateRegex.test(dalton.date_earned) : true;
		let validDateTook = dalton.date_taken.length > 0 ? dateRegex.test(dalton.date_taken) : true;
		let validReason = dalton.reason.length > 0 && dalton.reason.length < 255;
		let validPlayerTook = dalton.person_took_id > 0;
		
		const errorsNew = [];
		
		if(!validDateTook) errorsNew.push('date_taken')
		if(!validDateEarned) errorsNew.push('date_earned')
		if(!validReason) errorsNew.push('reason')
		if(!validPlayerTook) errorsNew.push('person_took_id')
		
		this.setState({
			errors: errorsNew
    });
		
		if(errorsNew.length === 0) {
			api.addDalton(this.state.daltonData).then(a => {
				if(a instanceof Error) alert(a.info.message)
				else alert('added Dalton!')
			});
			
//			window.location.reload(false)
		}
	}
	
	isInValid(key) {
		return this.state.errors.findIndex(keyEl => keyEl === key) !== -1;
	}

	componentDidMount() {
		api.getPlayers().then(data => {
			this.setState({ 
								playerData: data, 
					});
		})		
		
		console.log('default dalton : ' + JSON.stringify(defaultNewDalton));
		
		this.setState({ 
								daltonData: defaultNewDalton, 
								isLoading: false 
					});		
	}

	componentDidUpdate(prevProps) {
		console.log('update props: ' + this.props.dalton_id);
		let dalton_id = this.props.dalton_id
		
		if(dalton_id !== 0 && prevProps.dalton_id !== dalton_id) {
			api.getDaltonById(this.props.dalton_id).then(data => {
				
				const newDalton = {}
				newDalton.date_earned = data[0].date_earned ? data[0].date_earned : ''
				newDalton.date_taken = data[0].date_taken ? data[0].date_taken : ''
				newDalton.reason = data[0].reason ? data[0].reason : ''
				newDalton.person_earned_id = data[0].person_earned_id ? data[0].person_earned_id : '0'
				newDalton.person_took_id = data[0].person_took_id ? data[0].person_took_id : '0'
				
				this.setState({ 
									daltonData: newDalton, 
									isLoading: false,
									open: true
						});
			}).catch(err => {
				console.log(err.message)
				this.setState({open: false})
				}
			);
		}		
	}

	toggleEditor() {
		this.setState({
			open: !this.state.open
		});
	}
	
	render(props) {
		return (
			<Container>
			{ Object.keys(this.state.daltonData).length === 0 ?
									<p>no data to display </p> :
				<Card >	
			 		<Card.Header onClick={this.toggleEditor}>Featured</Card.Header>
			<Collapse in={this.state.open}>
			 		<Card.Body>		
			 <Form noValidate>
					{/* FIRST ROW */}
					<Row>
						<Col>
							<Form.Group>
								<Form.Label className="" htmlFor="inlineFormCustomSelectPref">
									Moet genomen worden door
								</Form.Label>
					<Form.Control
						as="select"
						id="person_took_id"
						onChange={this.handleInputChange}
						custom
						className='m-0'
						isInvalid={this.isInValid('person_took_id')}
						value={this.state.daltonData.person_took_id}
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
						
						<Col>
					<Form.Group>
						<Form.Label>Genomen op (als al genomen)</Form.Label>
						<Form.Control 
							value={this.state.daltonData.date_taken} 
							onChange={this.handleInputChange}
							isInvalid={this.isInValid('date_taken')}
							id="date_taken"
							placeholder="2020-01-01"
							/>
						<Form.Control.Feedback type="invalid">
                  Date should be of format YYYY-MM-DD
            </Form.Control.Feedback>
					</Form.Group>
							</Col>
						<Col md={4}>
					<Form.Group>
						<Form.Label>Reason</Form.Label>
						<Form.Control 
							value={this.state.daltonData.reason} 
							onChange={this.handleInputChange}
							id="reason"
							isInvalid={this.isInValid('reason')}
							as="textarea" rows="1" />
							<Form.Control.Feedback type="invalid">
                  Reason should not be empty
            </Form.Control.Feedback>
					</Form.Group>
							</Col>
					</Row>
					
					{/* SECOND ROW */}
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
						isInvalid={this.isInValid('person_earned_id')}
						value={this.state.daltonData.person_earned_id}
					>
					<option value={0}>Niemand</option>						
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
						<Col>
					<Form.Group>
						<Form.Label>Verdient op</Form.Label>
						<Form.Control 
							value={this.state.daltonData.date_earned} 
							onChange={this.handleInputChange}
							isInvalid={this.isInValid('date_earned')}
							id="date_earned"
							placeholder="2020-01-01"
							/>
						<Form.Control.Feedback type="invalid">
                  Date should be of format YYYY-MM-DD
            </Form.Control.Feedback>
					</Form.Group>
							</Col>
						<Col md={2} className="my-auto">
					 <Button variant="primary" onClick={this.handleClick}>Add Dalton</Button>
							</Col>
					</Row>
				</Form>
				</Card.Body>
						</Collapse>
						</Card>
				}
			</Container>

			);
	}
}

export default daltonEditor