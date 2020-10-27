import React, {Component} from 'react';

class EditPlayerProfile extends Component {
	
	constructor(props) {
    super(props);
 		
		this.initialState = {}
		
		if(props.player.player_id){
      this.state = props.player
    } else {
      this.state = this.initialState;
    }
		
	 	this.handleChange = this.handleChange.bind(this);
		this.handleSaveButton = this.handleSaveButton.bind(this);

  }	
	
	handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
			
		
		
    this.setState({
      [name]: value
    })
  }
	
	handleSaveButton(event) {
		event.preventDefault();
		this.props.saveProfile(this.state)
	}
	
	render(props) {
		
		return(
			<div>
				<form>
				<div className="form-group input-group">
					<label htmlFor="reason">Reden</label>
					<input 
						className="form-control" 
						id="singles_rating"
						name="singles_rating"
						value={this.state.singles_rating}
						onChange={this.handleChange}/>
				</div>
					<div className="form-group">
					<button className="form-control btn btn-primary" 
						type="button"
						onClick={this.handleSaveButton}>
						Save
					</button>
				</div>
			</form>
			</div>
			);
	}
}

export default EditPlayerProfile


