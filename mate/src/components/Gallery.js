import { useState, useContext } from 'react';
import React, { Component } from 'react';
import GalleryImage from "../components/GalleryImage";

export default class Gallery extends Component  {

    constructor(props) {
		super(props)

        console.log(props.imgUrls)
		this.state = {
			url: props.imgUrls[0]
            //url: "/products/"+props.item.pictureUrl
		}
	}

    //console.log("item?")
    //console.log(item)

    //console.log("/products/"+item.item.pictureUrl)

    /*
    return (
        <div className="gallery">
            <ul className="thumbs">
                <li className="active"><img src={"/products/"+item.item.pictureUrl} alt={item.item.title} /></li>
                <li><img src={"/products/"+item.item.pictureUrl} alt={item.item.title} /></li>
                <li><img src={"/products/"+item.item.pictureUrl} alt={item.item.title} /></li>
                <li><img src={"/products/"+item.item.pictureUrl} alt={item.item.title} /></li>
            </ul>
            <div className="img_detail">
                <img src={"/products/"+item.item.pictureUrl} alt={item.item.title} />
            </div>
        </div>
    );*/

    changeImg = (url) => {
		this.setState({
			url: url
		})
	}


    render() {
        return (
            <div className="gallery">
                <ul className="thumbs">
                {
                    this.props.imgUrls.map((url, index) => {
                        return(
                            <li key={index}>
                                <GalleryImage className="gallery-thumbnail" src={url} alt={'Img number' + (index + 1)}  />
                                <span onClick={e => this.changeImg(url)}></span>
                            </li>
                            
                        )			
                    })
                }
                </ul>
                <div className="img_detail">
                    <img src={this.state.url} alt="" />
                </div>
            </div>
        );
    }

    

}

