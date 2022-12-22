import { useState } from "react";
import useFetch from "use-http";
import { API_URL } from "../util/constants";
import { CharacterResume } from "../domain/model/Character";

export const useCharacters = () => {
  const [charactersList, setCharactersList] = useState<CharacterResume[]>([]);
  const [pagesQuantity, setPagesQuantity] = useState<number>(1);
  const { get, response, error, loading } = useFetch(API_URL);

  async function getCharacters(pageNumber: number = 1) {
    const data = await get(`/character?page=${pageNumber}`);
    console.log("response", response);
    if (response.ok) {
      setPagesQuantity(data.info.pages);
      setCharactersList(data.results);
    }
  }

  return {
    charactersList,
    getCharacters,
    pagesQuantity,
    loading,
    error,
  };
};
