import { useState } from "react";
import React from "react";

function GalleryItem({ image }){
const [toggledImageId, setToggledImageId] = useState(null);

const handleToggle = (id) => {
    setToggledImageId((prevToggledImageId) => 
      prevToggledImageId === id ? null : id
    );
  };
return(
  
    <div key={image.id} data-testid="galleryItem">
          {toggledImageId === image.id ? (
            <p 
            data-testid="toggle"
            className="image-gallery" 
            onClick={() => handleToggle(image.id)}
          >
            {image.description}
          </p>
          ) : (
            
            <div onClick={() => handleToggle(image.id)} >
            <img
             data-testid="toggle"
            src={image.url} 
            className="image-gallery" 
            alt={image.title  } 
          />
          
          </div>
          

          )}
          <div>{image.title}</div>
         </div>
         
        );
    }      




export default GalleryItem;

