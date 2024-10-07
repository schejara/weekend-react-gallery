import { useState } from "react";
import React from "react";
import axios from "axios";

function GalleryItem({ image, getGalleryItem }) {
  const [toggledImageId, setToggledImageId] = useState(null);
  const [likeCount, setLikeCount] = useState(image.likes);

  const handleToggle = () => {
    setToggledImageId((prevToggledImageId) =>
      prevToggledImageId === image.id ? null : image.id
    );
  };

  const handleLike = () => {
    console.log('Before increment:', likeCount);
    axios
      .put(`/api/gallery/likes/${image.id}`)
      .then(() => {
        // Increment the like count at client side
        getGalleryItem();
        setLikeCount((prevCount) => prevCount + 1);
      
      })
      .catch((error) => {
        console.error(error);
      });
      console.log('After increment:', likeCount);
  };

  return (
    <div data-testid="galleryItem">
      {toggledImageId === image.id ? (
        <p
          data-testid="toggle"
          className="image-gallery"
          onClick={handleToggle}
>
          {image.description}
        </p>
      ) : (
        <div onClick={handleToggle}>
          <img
            data-testid="toggle"
            src={image.url}
            className="image-gallery"
            alt={image.title}
          />
        </div>
      )}
      <div>{image.title}</div>
      <button data-testid="like" onClick = {handleLike}>Like</button>
      <div> {image.likes} People love this</div> 
      
          
      
    </div>
  );
}

export default GalleryItem;
