import React from "react";
import "./App.css";
import SearchablePokemonGallery from "./components/SearchablePokemonGallery";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchablePokemonGallery />
      </div>
    );
  }
}

export default App;
