import React from "react";
import { render, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

// it('renders a Loader since isLoading is initialised as "true"', () => {
//   const { getByLabelText } = render(<App />);
//   const linkElement = getByLabelText("audio-loading");
//   expect(linkElement).toBeInTheDocument();
// });

it("renders an input text filter", () => {
  const { getByLabelText } = render(<App />);
  const testElement = getByLabelText("filter-text");
  expect(testElement).toBeInTheDocument();
});

it("renders a button", () => {
  const { getByLabelText } = render(<App />);
  const testElement = getByLabelText("button");
  expect(testElement).toBeInTheDocument();
});

it("renders 51 cards", () => {
  const { getAllByLabelText } = render(<App />);
  const allCards = getAllByLabelText("card");
  expect(allCards).toHaveLength(51);
});

it("can filter to correct card", () => {
  const { getByText, getByLabelText, getAllByLabelText } = render(<App />);
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
