import React from 'react';

export const Form = ({ onSubmit, players}) => {	
	
	let options = Object.keys(players).map( function(key) {
		return <option key={key} value={key}>{players[key]}</option>
	});						

	return(
	<form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="emai	l"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
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

/*
{( 
							players.map((player, index) => {
								return <option 
									key={index} 
									value={player.id}
									>{player.nickname}
								</option> })
											)}
											
											*/