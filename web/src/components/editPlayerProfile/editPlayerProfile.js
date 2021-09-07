import React, {Component} from 'react';

class EditPlayerProfile extends Component {
	
	constructor(props) {
    super(props);
 		
		let initialState = {}
		
		if(props.player.player_id){
      initialState = props.player
    }

		this.state = {
			readOnly: true,
			player: initialState
		}
			
	 	this.handleChange = this.handleChange.bind(this);
		this.handleSaveButton = this.handleSaveButton.bind(this);

  }	
	
	handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
			
    this.setState(prevState => ({
			...prevState,
      player: {
				...prevState.player,
				[name]: value
			}
    }))
  }
	
	handleSaveButton(event) {
		event.preventDefault();
		this.setState(prevState => ({
				readOnly: !prevState.readOnly
			}));
		
		// Only send if we edited
		if(!this.state.readOnly) {
			this.props.saveProfile(this.state.player)
		}
	}
	
	render(props) {	
		const {player, readOnly} = this.state;

		return(
				<form className="">
					<div className="form-group row justify-content-center">
						<label className="text-left col-sm-2 col-form-label" htmlFor="name">Name</label>
						<input 
							readOnly={readOnly}
							className="form-control col-sm-4" 
							id="name"
							name="name"
							value={player.name}
							onChange={this.handleChange}/>
					</div>
					<div className="form-group row justify-content-center">
						<label className="text-left col-sm-2 col-form-label" htmlFor="nickname">Nickname</label>
						<input 
							readOnly={readOnly}
							className="form-control col-sm-4" 
							id="nickname"
							name="nickname"
							value={player.nickname}
							onChange={this.handleChange}/>
					</div>
					<div className="form-group row justify-content-center">
						<label className="text-left col-sm-2 col-form-label" htmlFor="singles_rating">Rating Single</label>
						<input 
							readOnly={readOnly}
							className="form-control col-sm-1" 
							id="singles_rating"
							name="singles_rating"
							value={player.singles_rating}
							onChange={this.handleChange}/>
						<label className="text-left col-sm-2 col-form-label" htmlFor="singles_rating_ending_year">Rating Single Final</label>
						<input 
							readOnly={readOnly}
							className="form-control col-sm-1" 
							id="singles_rating_ending_year"
							name="singles_rating_ending_year"
							value={player.singles_rating_ending_year}
							onChange={this.handleChange}/>
					</div>
					<div className="form-group row justify-content-center">
						<label className="text-left col-sm-2 col-form-label" htmlFor="doubles_rating">Rating Doubles</label>
						<input 
							readOnly={readOnly}
							className="form-control col-sm-1" 
							id="doubles_rating"
							name="doubles_rating"
							value={player.doubles_rating}
							onChange={this.handleChange}/>
						<label className="text-left col-sm-2 col-form-label" htmlFor="doubles_rating_ending_year">Rating Doubles Final</label>
						<input 
							readOnly={readOnly}
							className="form-control col-sm-1" 
							id="doubles_rating_ending_year"
							name="doubles_rating_ending_year"
							value={player.doubles_rating_ending_year}
							onChange={this.handleChange}/>
					</div>
					<div className="form-group row justify-content-center">
						<button className="form-control col-sm-2 btn btn-primary" 
							type="button"
							onClick={this.handleSaveButton}>
							{readOnly ? "Edit" : "Save"}
						</button>
					</div>
				</form>
		);
	}
}

export default EditPlayerProfile


