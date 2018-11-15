import React, {Component} from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


function PhotoWall(props){
	return <div> 
				<Link className='addIcon' to='/AddPhoto'>&nbsp;&nbsp;</Link> 
				
				<div className='photoGrid'> 
					{props.posts.map((post,index)=> <Photo key={index} post= {post} {...props}/>)}
				</div>
			</div>
}

PhotoWall.propTypes = {
	posts: PropTypes.array.isRequired,
}

// class PhotoWall extends Component{
// 	render(){
// 		return <div className='photoGrid'> 
// 					{this.props.posts.map((post,index)=> <Photo key={index} post={post}/>)}
// 				</div>
// 	}
// }

export default PhotoWall;