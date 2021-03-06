import React, { Component } from 'react';
import api from '../data/api.js'
import BlogPost from '../components/blogPost/blogPost'

class Home extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			isLoading: true,
		}
	}
	
	componentDidMount() {
		api.getPosts()
			.then(posts => {
								if(posts) {
									this.setState({ 
											posts: posts,
											isLoading: false
									})
								};
		})
	}
	
	render() {
		const {isLoading, posts} = this.state;
		
		const postList = !posts ? null : posts.map((post, index) => {
						return (
							<div key={index}>
								<BlogPost post={post} index={index}></BlogPost>
								<hr></hr>
							</div>
							)})
		
		if(isLoading) {
			return <h3 className='mt-4'>loading...</h3>
		} else 
			return (
				<div>
 					<div className='front-image-container'>
						<img src={process.env.PUBLIC_URL + '/background.jpg'} className='p-4' alt="background"/>
						<h1>Heeren A </h1>
					</div>
					<div className='container'>
							{postList}
					</div>
				</div>
				)
			}
	}
    
export default Home


    