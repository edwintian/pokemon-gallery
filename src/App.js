import React from "react";
import "./App.css";
import SearchablePokemonGallery from "./components/SearchablePokemonGallery";

function App() {
  console.log("rendering in Main");  
  return (
    <div className="App">
        <SearchablePokemonGallery/>
    </div>
  );
}

export default App;
