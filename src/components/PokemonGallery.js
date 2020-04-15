import React from "react";
import "./PokemonGallery.css";

function PokemonCard({ pokemon }) {
  const { id, name, type, base } = pokemon;
  return (
    <div className="pokemon">
      <img
        src={process.env.PUBLIC_URL + "/pokemonImage/" + id + ".png"}
        alt=""
      />
      <div className="name">{name.english}</div>
      {type.map(currType => (
        <span
          className="type"
          style={{ backgroundColor: SetBackgroundColorForType(currType) }}
        >
          {currType}
        </span>
      ))}
      {Object.keys(base).map(currKey => (
        <div className="base">
          {currKey}: {base[currKey]}
        </div>
      ))}
    </div>
  );
}

function SetBackgroundColorForType(currType) {
  let backgroundColor = "white";
  if (currType === "Fire") {
    backgroundColor = "#FF6600";
  } else if (currType === "Grass") {
    backgroundColor = "#99FF99";
  } else if (currType === "Water") {
    backgroundColor = "#99FFFF";
  } else if (currType === "Poison") {
    backgroundColor = "#9999FF";
  } else if (currType === "Fairy") {
    backgroundColor = "#FF99FF";
  } else if (currType === "Ground") {
    backgroundColor = "#996633";
  } else if (currType === "Bug") {
    backgroundColor = "#CC9900";
  } else if (currType === "Electric") {
    backgroundColor = "#FFFF00";
  } else if (currType === "Flying") {
    backgroundColor = "#CCCCFF";
  }
  return backgroundColor;
}

function PokemonGallery({ pokemonData }) {
  return (
    <div className="PokemonGallery">
      {pokemonData.map(currPokemon => <PokemonCard pokemon={currPokemon} />)}
    </div>
  );
}

export default PokemonGallery;
