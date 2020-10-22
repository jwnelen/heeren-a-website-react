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
	}
	
	handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }
	
	render(props) {
		const {onSubmit, players, dalton, setFieldValue} = this.props;
		
		let options = Object.keys(players).map( function(key) {
			return <option key={key} value={key}>{players[key]}</option>
		});	
		
		let pageTitle;
		if(this.state.dalton_id === -1) {
      pageTitle = <h2>Add Dalton</h2>
    } else {
      pageTitle = <h2>Edit Dalton</h2>
    }
		
		return(
		<form onSubmit={(e) => onSubmit(e, this.state)}>
				{pageTitle}
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
				<div className="form-group">
					<button className="form-control btn btn-primary" type="submit">
						Submit
					</button>
				</div>
			</form>
		)
	}
}

export default Form