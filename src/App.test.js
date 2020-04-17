import React from "react";
import pokemonData from "./pokemon/pokemon";
import {
  render,
  fireEvent,
  waitForElementToBeRemoved
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
require("mutationobserver-shim");
const mockAxios = new MockAdapter(axios);

describe("Pokemon", () => {
  // beforeEach(() => {
    mockAxios
      .onGet(
        "https://us-central1-pokedex-23fb6.cloudfunctions.net/app/pokemonData"
      )
      .reply(200, pokemonData);
  // });
  //
  // afterEach(() => {
  //   mockAxios.reset();
  // });

  it("should render Pokemon cards", async () => {
    const { getByLabelText, getAllByLabelText } = render(<App />);
    await waitForElementToBeRemoved(() => getByLabelText("audio-loading"));
    expect(getAllByLabelText("card")).toHaveLength(51);
  });

  it("renders an input text filter", async () => {
    const { getByLabelText } = render(<App />);
    await waitForElementToBeRemoved(() => getByLabelText("audio-loading"));
    const testElement = getByLabelText("filter-text");
    expect(testElement).toBeInTheDocument();
  });

  it("renders a button", async () => {
    const { getByLabelText } = render(<App />);
    await waitForElementToBeRemoved(() => getByLabelText("audio-loading"));
    const testElement = getByLabelText("button");
    expect(testElement).toBeInTheDocument();
  });

  it("can filter to correct card", async () => {
    const { getByText, getByLabelText, getAllByLabelText } = render(<App />);
    await waitForElementToBeRemoved(() => getByLabelText("audio-loading"));
    const inputTextElement = getByLabelText("filter-text");
    const buttonElement = getByLabelText("button");
    fireEvent.change(inputTextElement, {
      target: {
        value: "Pikachu"
      }
    });
    fireEvent.click(buttonElement);
    const filteredPokemonCards = getAllByLabelText("card");
    expect(filteredPokemonCards).toHaveLength(1);
    const pikachu = getByText("Pikachu");
    expect(pikachu).toBeInTheDocument();
    //expect(()=>getByText("Blastoise")).toThrowError();
  });
});

// it("should renders 2 links element", () => {
//   const { getByText } = render(<App />);
//   const pokemonApp = getByText("Pokemon App");
//   const counterApp = getByText("Counter App");
//   expect(pokemonApp).toBeInTheDocument();
//   expect(counterApp).toBeInTheDocument();
// });
//
// it("should renders Counter App", () => {
//   const { getByText } = render(<App />);
//   const counterApp = getByText("Counter value: 0");
//   expect(counterApp).toBeInTheDocument();
// });
//
// it("should renders PokeMon App on clicking the link", () => {
//   const { getByText, getAllByLabelText } = render(<App />);
//   const pokemonApp = getByText("Pokemon App");
//   fireEvent.click(pokemonApp);
//   const allCards = getAllByLabelText("card");
//   expect(allCards).toHaveLength(51);
// });
