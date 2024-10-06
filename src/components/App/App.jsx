import React from "react";
import GalleryList from "../GalleryList/GalleryList";
import Header from "../Header/Header";
function App() {
 return(
 
<div data-testid="app">
    <Header/>
    
    <p >The gallery goes here!</p> 

  <GalleryList/>
  </div>
 
 ) 
  
}
export default App;


