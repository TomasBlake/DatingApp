import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Photos.css';

const Photos = (props) => {
    const images = props.photos.map(photo => {
        return {
            original: photo.url,
            thumbnail: photo.url,
            originalClass: 'original-class'
        }
    })
    console.log(images);
    return(
        <div style={{textAlign: 'left', padding: '0px 30px 0 30px'}}>
        <h2>Photos</h2>
        <ImageGallery additionalClass='gallery' items={images} />
        </div>
    );
}

export default Photos;