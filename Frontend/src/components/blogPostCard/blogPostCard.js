import React, {Component} from 'react';
import './blogPostCard.css'
import moment from 'moment'
import 'moment/locale/nl'

class BlogPost extends Component {
	
	render(props) {			
		const {post, index} = this.props;
		
		return(
			<div className="card m-3 no-border container-blog-post" key={index}>
				<div className="card-body"> 	
					<div className="card-title"> <h5 className="">{post.title}</h5></div>
					<div className="card-text">
					<h6 className=" mb-2 text-muted">{moment(post.date).format('dddd DD MMMM YYYY')}</h6>
					<p style={{'whiteSpace': 'pre-wrap'}}>{post.body.substring(0, 200)} <a href="#">[...]</a></p>
					</div>
				</div>
			</div>
			)
	}
}

export default BlogPost