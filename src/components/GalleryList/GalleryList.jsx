import { useState, useEffect} from "react";
import axios from "axios";
import GalleryItem from "../GalleryItem/GalleryItem";


function GalleryList(){
    const[galleryItems,setGalleryItems] = useState([]);
    const[likeCount,setLikeCount] = useState({});

    const getGalleryItem = () => {
        axios
          .get("/api/gallery")
          .then((response) => {
            console.log('get response data is',response.data)
              setGalleryItems(response.data);
    
            // initial like counts as in the database for each image
            const initialLikeCount = response.data.reduce((acc, item) => {
              acc[item.id] = item.likes 
              return acc;
              }, {});
            // end new code
            setLikeCount(initialLikeCount);
            })
    
          .catch((error) => {
            console.error(error);
          });
      };
      const handleLike = (id) => {
        axios
          .put(`/api/gallery/likes/${id}`)
          .then((response) => {
            //setLikeCount(response.data)
            const updatedLikeCount = response.data; // This should be the new count for the image
          console.log('updated like count is', updatedLikeCount);
          setLikeCount((prevLikeCount) => ({
            ...prevLikeCount,
            [id]: updatedLikeCount // Update the count for the specific image ID
          }));
          getGalleryItem();
        })
          .catch((error) => {
            console.error(error);
          });
      };
    
      useEffect(() => {
        getGalleryItem();
      }, []);
     
return(


    <>
    <div data-testid="galleryList" className="image-gallery-container">
      {galleryItems.map((image) => (
        <div key={image.id}>
            <GalleryItem image = {image}/>
          
          <button className="btn" onClick={() => handleLike(image.id)}>Like</button>

          <div data-testid="like"className="para">
            {likeCount[image.id]} People love this
            </div>
        </div>
      ))}
    </div>
    </>
)


}

export default GalleryList