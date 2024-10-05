import { useState, useEffect} from "react";
import axios from "axios";
function App() {
  const[galleryItem,setGalleryItem] = useState([]);
  const[toggleTheme,setToggleTheme] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const getGallaryItem = () => {
    axios
      .get("/api/gallery")
      .then((response) => {
        setGalleryItem(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getGallaryItem();
  }, []);

  const handleToggle = (image) => {
    if (selectedImage === image) {
      setToggleTheme(!toggleTheme);
    } else {
      setSelectedImage(image);
      setToggleTheme(true);
    }
  };
  return (
    <div data-testid="app">
      <header>
        <h1>React Gallery</h1>
      </header>

      <p>The gallery goes here!</p>
      
      <div>
        {galleryItem.map((image) => (
          <div key={image.id} onClick={() => handleToggle(image)}>
            <img src={image.url} className="image-gallery" alt={image.description} />
            <button>Like</button>
            {selectedImage === image && (
              toggleTheme ? 
              <img src={image.url} className="image-gallery" alt={image.description} /> : 
              <p className="image-gallery">{image.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
