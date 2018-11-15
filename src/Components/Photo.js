import React, {Component} from 'react';
import PropTypes from 'prop-types'

function Photo(props){
	const post = props.post
	return <figure className='figure'> 
				<img className='photo' src={post.imageLink} alt={post.description} />
				<figcaption> <p>{post.description}</p></figcaption>
				<div className='button-container'>
						<button className='remove-button' onClick={() => {
						props.removePost(1)
  					}}>Remove</button>
				</div>
			</figure>
}

Photo.propTypes = {
	post: PropTypes.object.isRequired,
}


// class Photo extends Component {
// 	render(){ 
// 		return <figure className='figure'> 
// 					<img className='photo' src={post.imageLink} alt={post.description} />
// 					<figcaption> <p>{post.description}</p></figcaption>
// 					<div className='button-container'>
// 						<button className='remove-button'>Remove</button>
// 					</div>
// 				</figure>
// 	}
// }

export default Photo;