import React, {Component} from 'react';
import './blogPost.css'
import moment from 'moment'
import 'moment/locale/nl'

class BlogPost extends Component {
	
	render(props) {			
		const {post, index} = this.props;
		
		return(
			<div className="m-3 no-border row" key={index}>
				<div className="col-lg-10">
					<h4 className="">{post.title}</h4>
					 <hr />
					<h6 class=" mb-2 text-muted">{
			moment(post.date).format('dddd DD MMMM YYYY')}</h6>
					<hr />
					<p style={{'white-space': 'pre-wrap'}}>{post.body}</p>
				</div>
			</div>
			)
	}
}

export default BlogPost