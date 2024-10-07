import { useState, useEffect } from "react";
import axios from "axios";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList() {
  const [galleryItems, setGalleryItems] = useState([]);

  const getGalleryItem = () => {
    axios
      .get("/api/gallery")
      .then((response) => {
        console.log("get response data is", response.data);
        setGalleryItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getGalleryItem();
  }, []);

  return (
    <div data-testid="galleryList" className="image-gallery-container">
      {galleryItems.map((image) => (
        <GalleryItem
          key={image.id}
          image={image}
        />
      ))}
    </div>
  );
}

export default GalleryList;
