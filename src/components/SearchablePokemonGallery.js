import React, { Fragment } from "react";
//import pokemonData from "../pokemon/pokemon";
import SearchForm from "./SearchForm";
import PokemonGallery from "./PokemonGallery";
import axios from "axios";
import Loader from "./Loader";

class SearchablePokemonGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonSearchText: "",
      pokemonData: [],
      isLoading: true
    };
  }

   fetchPokemonData = () => {
     this.setState({
       isLoading: true
     });
     const URL =
       "https://us-central1-pokedex-23fb6.cloudfunctions.net/app/pokemonData";
     axios(URL).then(res => {
       this.setState({
         pokemonData: res.data,
         isLoading: false
       });
     });
   };

   componentDidMount() {
     this.fetchPokemonData();
   }

  updateSearchText = text => {
    this.setState({ pokemonSearchText: text });
    //console.log("updateSearchText is called");
  };

  render() {
    //console.log("rendering in SearchablePokemonGallery");
    const filteredPokemonData = this.state.pokemonData.filter(pokemon =>
    //const filteredPokemonData = pokemonData.filter(pokemon =>
      pokemon.name.english
        .toLowerCase()
        .includes(this.state.pokemonSearchText.toLowerCase())
    );

    return (
      <div>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Fragment>
            <SearchForm updateSearchText={this.updateSearchText} />
            <PokemonGallery pokemonData={filteredPokemonData} />
          </Fragment>
        )}
      </div>
    );
  }
}

export default SearchablePokemonGallery;
