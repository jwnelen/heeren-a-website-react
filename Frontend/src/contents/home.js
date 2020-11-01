import React, { Component } from 'react';
import api from '../data/api.js'
import BlogPostCarousel from '../components/blogPostCarousel/blogPostCarousel'

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
		
		if(isLoading) {
			return <h3 className='mt-4'>loading...</h3>
		} else 
			return (
				<div>
				<div className="container">
					<div className='row'>
						<div className='front-image-container col-12'>
							<h2>Heeren A </h2>
							<img src={process.env.PUBLIC_URL + '/background.jpg'} className='p-4' alt="background"/>
						</div>
					</div>
					<div className="row justify-content-center">
						<h2>Laatste posts</h2>
						<div className='row'>
							<BlogPostCarousel posts={posts}/>
						</div>
					</div>
					<div className="row justify-content-center">
						<div>
							<h2>Spelers</h2>
							<p> 
							Bekijk alle top spelers <a href='/team'>hier</a>
							</p>
						</div>
					</div>
					<div className="row justify-content-center">
						<div>
							<h2>Daltons</h2>
							<p> 
								Bekijk alle uitgedeelde en genomen daltons <a href='/daltons'>hier</a>
							</p>
						</div>
					</div>
					</div>
				</div>
				)
			}
	}
    
export default Home


    