import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

function GalleryItem({ image }) {
  const [toggledImageId, setToggledImageId] = useState(null);
  const [likeCount, setLikeCount] = useState(image.likes);

  const handleToggle = () => {
    setToggledImageId((prevToggledImageId) =>
      prevToggledImageId === image.id ? null : image.id
    );
  };

  const handleLike = () => {
    axios
      .put(`/api/gallery/likes/${image.id}`)
      .then(() => {
        // Increment the like count locally for immediate UI feedback
        setLikeCount((prevCount) => prevCount + 1);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div key={image.id} data-testid="galleryItem">
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
      <button onClick = {handleLike}>Like</button>
      <div
        data-testid="like"
        className="btn"
        
      >
        
      </div>
      <div data-testid="like">{likeCount} People love this</div>
    </div>
  );
}

export default GalleryItem;
