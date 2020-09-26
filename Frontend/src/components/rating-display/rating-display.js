import React, {Component} from 'react';
import './rating-display.css'

class RatingDisplay extends Component {
	render(props) {
		return(
			<div>
				<div className="rating border"> 5
					<span className="current-rating">
							{this.props.ratingSingles || '0.0000'} </span>
				</div>
				<div className="rating border"> 5
					<span className="current-rating justify-content-center">
							{this.props.ratingDoubles || '0.0000'} </span>
				</div>
			</div>
		)
	}
}

export default RatingDisplay