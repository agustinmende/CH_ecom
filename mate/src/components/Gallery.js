import { useState, useContext } from 'react';


function Gallery(item) {

    let imgUrls = [
        'https://source.unsplash.com/k3IogSsONd4/800x600',
        'https://source.unsplash.com/gThfDnqgfMw/800x600',
        'https://source.unsplash.com/_1x_x8Vtg2w/800x600',
        'https://source.unsplash.com/TFP_s4_jRuE/800x600',
        'https://source.unsplash.com/pElM4yerF5Q/800x600',
        'https://source.unsplash.com/sFsy8CKyQ5c/800x600',
        'https://source.unsplash.com/0WGucY1VHI0/800x600',
        'https://source.unsplash.com/1ciHU-qPifY/800x600',
        'https://source.unsplash.com/JZCJotPa96c/800x600',
        'https://source.unsplash.com/8X19catOuNI/800x600',
        'https://source.unsplash.com/_GDff35-Pa8/800x600',
        'https://source.unsplash.com/XYok1nBGvhk/800x600'
     ]
    

    console.log("item?")
    console.log(item)

    console.log("/products/"+item.item.pictureUrl)

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
    );
}

export default Gallery;