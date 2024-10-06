import { useState, useEffect} from "react";
import axios from "axios";
function App() {
  const[galleryItems,setGalleryItems] = useState([]);
  const [toggledImageId, setToggledImageId] = useState(null);
  const[likeCount,setLikeCount] = useState({});
  
  const getGalleryItem = () => {
    axios
      .get("/api/gallery")
      .then((response) => {
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
  const increaseLikeCount = (id) => {
    axios
      .put(`/api/gallery/likes/${id}`)
      .then((response) => {
        //setLikeCount(response.data)
        const updatedLikeCount = response.data; // This should be the new count for the image
      
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
 
  const handleToggle = (id) => {
    setToggledImageId((prevToggledImageId) => 
      prevToggledImageId === id ? null : id
    );
  };
  
 return (
  <div data-testid="app">
    <header>
      <h1>React Gallery</h1>
    </header>

    <p>The gallery goes here!</p>
    
    <div className="image-gallery-container">
      {galleryItems.map((image) => (
        <div key={image.id}>
          {toggledImageId === image.id ? (
            <p 
            className="image-gallery" 
            onClick={() => handleToggle(image.id)}
          >
            {image.description}
          </p>
          ) : (
            
            <img 
            onClick={() => handleToggle(image.id)} 
            src={image.url} 
            className="image-gallery" 
            alt={image.description} 
          />
          )}
           
          <button className="btn" onClick={() => increaseLikeCount(image.id)}>Like</button>

          <p className="para">{likeCount[image.id]} People love this</p>
        </div>
      ))}
    </div>
  </div>
);
}

export default App;

