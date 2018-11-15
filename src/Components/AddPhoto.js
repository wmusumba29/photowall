import React, {Component} from 'react';

class AddPhoto extends Component {

	constructor(){
		super()
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event){
		event.preventDefault();
		const imageLink = event.target.elements.link.value;
		const desc = event.target.elements.desc.value;
		const post = {
			id: 0,
			description: desc,
			imageLink: imageLink
		}
		if(imageLink && desc){
			this.props.onAddPhoto(post)
		}
	}

	render(){
		return (<div>
					<h1>Photowall</h1>
					<div className="form">
					<form onSubmit={this.handleSubmit}>
						<input type="text" placeholder='Link' name='link' />
						<input type="text" placeholder='Description' name='desc' />
						<button> Post </button>
					</form>
					</div>
				</div>
			)
	}
}

export default AddPhoto;