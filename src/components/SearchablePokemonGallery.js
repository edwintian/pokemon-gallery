import React from "react";
import pokemonData from "../pokemon/pokemon";
import SearchForm from "./SearchForm";
import PokemonGallery from "./PokemonGallery";

class SearchablePokemonGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonSearchText: ""
    };
  }

  updateSearchText = text => {
    this.setState({ pokemonSearchText: text });
    console.log("updateSearchText is called");
  };

  render() {
    console.log("rendering in SearchablePokemonGallery");
    const filteredPokemonData = pokemonData.filter(pokemon =>
      pokemon.name.english
        .toLowerCase()
        .includes(this.state.pokemonSearchText.toLowerCase())
    );

    return (
      <div>
        <SearchForm updateSearchText={this.updateSearchText} />
        <PokemonGallery pokemonData={filteredPokemonData} />
      </div>
    );
  }
}

export default SearchablePokemonGallery;
