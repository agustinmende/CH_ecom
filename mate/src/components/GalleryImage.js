import React, { Component } from 'react'

export default class GalleryImage extends Component {
	render() {
		return(
			<img alt="" src={this.props.src}  />
		)
	}
}
