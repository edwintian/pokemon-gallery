import React from "react";
import "./App.css";
import SearchablePokemonGallery from "./components/SearchablePokemonGallery";
//import { BrowserRouter, Route, NavLink } from "react-router-dom";
//import Counter from "./components/Counter";

class App extends React.Component {
  render() {
    return (
      //<BrowserRouter>
        <div className="App">
          {/*
      <header>
      <NavLink to="/pokemon">Pokemon App</NavLink>
      <NavLink to="/">Counter App</NavLink>
      </header>
      <Route exact path="/" component={Counter} />
      <Route path="/pokemon" component={SearchablePokemonGallery} />
      */}
          <SearchablePokemonGallery />
        </div>
      //</BrowserRouter>
    );
  }
}

export default App;
