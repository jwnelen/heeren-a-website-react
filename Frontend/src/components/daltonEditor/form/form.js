import React from 'react';

export const Form = ({ onSubmit, players, dalton, setFieldValue}) => {	
	
	let options = Object.keys(players).map( function(key) {
		return <option key={key} value={key}>{players[key]}</option>
	});						

	
	
	return(
	<form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="reason">Reden</label>
        <input className="form-control" id="reason" />
      </div>
			<div className="form-group">
				<label htmlFor="playerTook">Genomen door</label>
				<select className="form-control" id="playerTook">
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
	);
}

export default Form