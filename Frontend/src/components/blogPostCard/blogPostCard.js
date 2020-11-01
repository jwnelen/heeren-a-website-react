import React, {Component} from 'react';
import './blogPostCard.css'
import moment from 'moment'
import 'moment/locale/nl'

class BlogPost extends Component {
	
	render(props) {			
		const {post, index} = this.props;
		
		return(
			<div className="card border-primary h-100 container-blog-post" key={index}>
				<div className="card-body d-flex flex-column"> 	
					<div className="card-title text-primary"> <h5 className="">{post.title}</h5></div>
					<div className="card-text">
					<h6 className=" mb-2 text-muted">{moment(post.date).format('dddd DD MMMM YYYY')}</h6>
					<p style={{'whiteSpace': 'pre-wrap'}}>{post.body.substring(0, 200)} <a href="">[...]</a></p>
					</div>
				</div>
			</div>
			)
	}
}

export default BlogPost
																																													
