import React, {Component} from 'react';

class EditUserProfile extends Component {
	
	constructor(props) {
    super(props);
 		
		let initialState = {}
		
		if(props.user){
      initialState = props.user
    }

		this.state = {
			readOnly: true,
			user: initialState
		}
  }	
	
	render(props) {	
		const {user, readOnly} = this.state;

		return(
				<form>
					<div className="form-group row justify-content-center">
						<label className="text-left col-sm-2 col-form-label" htmlFor="name">Username</label>
						<input 
							readOnly={readOnly}
							className="form-control col-sm-4" 
							id="name"
							name="name"
							value={user.username}/>
					</div>
					<div className="form-group row justify-content-center">
						<label className="text-left col-sm-2 col-form-label" htmlFor="nickname">Email</label>
						<input 
							readOnly={readOnly}
							className="form-control col-sm-4" 
							id="nickname"
							name="nickname"
							value={user.email}/>
					</div>
					<div className="form-group row justify-content-center">
						<label className="text-left col-sm-2 col-form-label" htmlFor="singles_rating">Player id</label>
						<input 
							readOnly={readOnly}
							className="form-control col-sm-1" 
							id="singles_rating"
							name="singles_rating"
							value={user.user_player_id ? user.user_player_id : "-"}/>
						<div className="col-sm-3">
						</div>
					</div>
				</form>
		);
	}
}

export default EditUserProfile


