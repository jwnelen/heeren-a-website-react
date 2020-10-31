import React, {Component} from 'react';
import BlogPostCard from '../blogPostCard/blogPostCard'

class BlogPostCarousel extends Component {
	constructor(props) {
		super(props);
		
//		this.state = {
//			currentUser: AuthService.getCurrentUser()
//		}
	}
	
	render(props) {
		const {posts} = this.props;
		const amountPosts = 3;

		const postList = !posts ? null : posts.splice(0, amountPosts).map((post, index) => {
						return(
								<div key={index} className='col-md-4'>
										<BlogPostCard post={post} index={index}></BlogPostCard>
									</div> )
							})
						
		
		return(
				<div className="container justify-content-center">				
					<div className='row'>
							{postList}		
						</div>			
				</div>	
			)
	}
}

export default BlogPostCarousel

