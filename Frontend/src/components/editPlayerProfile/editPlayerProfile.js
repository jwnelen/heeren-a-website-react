import React, {Component} from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const regex = RegExp(/[1-9][.]\d\d\d\d/)
const vrating = value => {
	if (!regex.test(value)) {
		return (
			<div className="alert alert-danger" role="alert">
				Please use format 9.9999
			</div>
		);
	}
};

class EditPlayerProfile extends Component {
	
	constructor(props) {
    super(props);
 		
		let initialState = {}
		
		if(props.player.player_id){
      initialState = props.player
    }

		this.state = {
			readOnly: true,
			successful: false,
      message: "",
			player: initialState
		}
			
	 	this.handleChange = this.handleChange.bind(this);
		this.handleSaveButton = this.handleSaveButton.bind(this);

  }	
	
	handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
		console.log('handleing change of name: ' + name + ", value: " + value)
		
    this.setState(prevState => ({
      player: {
				...prevState.player,
				[name]: value
			}
    }))
  }
	
	handleSaveButton(event) {
		event.preventDefault();
		
		this.setState({
      message: "",
      successful: false
    });
		
		if(this.state.readOnly) {
			this.setState(prevState => ({
				readOnly: !prevState.readOnly
			}));
			return
		} else {
    	this.form.validateAll()
			
			if (this.checkBtn.context._errors.length === 0) {
				this.props.saveProfile(this.state.player)
					.then(
						response => {
							console.log('correct values in response')
							
							this.setState({
								message: "Values saved",
								successful: true,
								readOnly: true
							});
						})
			
					
			} else {
				this.setState({
            successful: false,
            message: "Still incorrect fields"
          });
			}
		}
	}

	
	render(props) {	
		const {player, readOnly} = this.state;

		return(
				<Form noValidate ref={c => { this.form = c }} onSubmit={this.handleSaveButton}>
					<div className="form-group row justify-content-center">
						<label className="text-left col-sm-2 col-form-label" htmlFor="name">Name</label>
						<Input 
							readOnly={readOnly}
							className="form-control" 
							id="name"
							name="name"
							value={player.name}
							onChange={this.handleChange}
							validations={[required]}/>
						<div className="col-sm-4"></div>
					</div>
					<div className="form-group row justify-content-center">
						<label className="text-left col-sm-2 col-form-label" htmlFor="nickname">Nickname</label>
						<Input 
							readOnly={readOnly}
							className="form-control" 
							id="nickname"
							name="nickname"
							value={player.nickname}
							onChange={this.handleChange}
							validations={[required]}/>
						<div className="col-sm-4"></div>
					</div>
					<div className="form-group row justify-content-center">
						<label className="text-left col-sm-2 col-form-label" htmlFor="singles_rating">Rating Singles</label>
						<Input 
							readOnly={readOnly}
							className="form-control col-sm-6" 
							name="singles_rating"
							value={player.singles_rating}
							onChange={this.handleChange}
							validations={[required, vrating]}/>
						<label className="text-left col-sm-2 col-form-label" htmlFor="singles_rating_ending_year_id">Rating Single Final</label>
						<Input 
							readOnly={readOnly}
							className="form-control col-sm-4" 
							id="singles_rating_ending_year_id"
							name="singles_rating_ending_year"
							value={player.singles_rating_ending_year}
							onChange={this.handleChange}
							validations={[required]}/>
					</div>
					<div className="form-group row justify-content-center">
						<label className="text-left col-sm-2 col-form-label" htmlFor="doubles_rating">Rating Doubles</label>
						<Input 
							readOnly={readOnly}
							className="form-control col-sm-6" 
							id="doubles_rating"
							name="doubles_rating"
							value={player.doubles_rating}
							onChange={this.handleChange}
							validations={[required, vrating]}/>
						<label className="text-left col-sm-2 col-form-label" htmlFor="doubles_rating_ending_year">Rating Doubles Final</label>
						<Input 
							readOnly={readOnly}
							className="form-control col-sm-4" 
							id="doubles_rating_ending_year"
							name="doubles_rating_ending_year"
							value={player.doubles_rating_ending_year}
							onChange={this.handleChange}
							validations={[required]}/>
					</div>
					<div className="form-group row justify-content-center">
						<button className="form-control col-sm-2 btn btn-primary" 
							>
							{readOnly ? "Edit" : "Save"}
						</button>
					</div>
				{this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
				<CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
				</Form>
		);
	}
}

export default EditPlayerProfile


