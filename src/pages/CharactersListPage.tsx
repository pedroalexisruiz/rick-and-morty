import React from "react";
import { useCharacters } from "../customHooks/useCharacters";
import CharactersList from "./CharacterList";

const CharactersListPage = () => {
  const { charactersList, getCharacters, pagesQuantity } = useCharacters();

  return (
    <CharactersList
      charactersList={charactersList}
      getCharacters={getCharacters}
      pagesQuantity={pagesQuantity}
    />
  );
};

export default CharactersListPage;
