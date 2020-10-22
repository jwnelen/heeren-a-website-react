import React, {Component} from 'react';

class Form extends Component {	
	
	constructor(props) {
    super(props);
		
		this.initialState = {
			dalton_id: -1,
			reason: '',
			person_took_id: '0'
		}
		
		if(props.currentDalton.dalton_id){
      this.state = props.currentDalton
    } else {
      this.state = this.initialState;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
	}
	
	handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }
	
	handleDeleteButton(event) {
		event.preventDefault();
		this.props.onSubmit(event, this.state, true)
	}
	
	render(props) {
		const {onSubmit, players} = this.props;
		
		let options = Object.keys(players).map( function(key) {
			return <option key={key} value={key}>{players[key]}</option>
		});	
		
		let confirmButtons;
		
		if(this.state.dalton_id === -1) {
			confirmButtons = 
				<div className="form-group">
					<button className="form-control btn btn-primary" type="submit">
						Add Dalton!
					</button>
				</div>
    } else {
			confirmButtons = 
				<div className="row justify-content-around">
					<div className='col-6'>
					<button className="form-control btn btn-primary" type="submit">
						Confirm
					</button>
						</div>
					<div className='col-6'>
					<button className="form-control btn btn-danger" type="button" onClick={this.handleDeleteButton}>
						Delete Dalton
					</button>
					</div> 
				</div>
    }
		
		
		return(
		<form onSubmit={(e) => onSubmit(e, this.state)}>
				<div className="form-group">
					<label htmlFor="reason">Reden</label>
					<input 
						className="form-control" 
						id="reason"
						name="reason"
						value={this.state.reason}
						onChange={this.handleChange}/>
				</div>
				<div className="form-group">
					<label htmlFor="playerTook">Genomen door</label>
					<select 
						className="form-control" 
						id="playerTook"
						name="person_took_id"
						value={this.state.person_took_id}
						onChange={this.handleChange}>
					<option value={0}>Choose...</option>
					{options}
					</select>
			</div>
					{confirmButtons}
			</form>
		)
	}
}

export default Form