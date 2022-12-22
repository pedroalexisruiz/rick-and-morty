import React, { useEffect, useState } from "react";
import CharacterItem from "../components/CharactersTable/CharacterItem";
import CharactersTable from "../components/CharactersTable/CharactersTable";
import Thumbnail from "../components/Thumbnail";
import { CharacterResume } from "../domain/model/Character";
import { Title } from "../components/title";
import { useTranslation } from "react-i18next";

const CharactersList = ({ charactersList, getCharacters, pagesQuantity }) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const loadCharactersByPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    getCharacters(pageNumber);
  };
  const tableHeaders = [
    t("characters.name"),
    t("characters.status"),
    t("characters.type"),
    t("characters.image"),
  ];
  useEffect(() => {
    getCharacters(currentPage);
  }, []);

  return (
    <>
      <Title>{t("title")}</Title>
      {charactersList.length ? (
        <CharactersTable
          headers={tableHeaders}
          currentPage={currentPage}
          lastPage={pagesQuantity}
          setPage={loadCharactersByPage}
        >
          {charactersList.map((character: CharacterResume, index: number) => {
            return (
              <CharacterItem
                cells={[
                  <p>{character.name}</p>,
                  <p>{character.status}</p>,
                  <p>{character.species}</p>,
                  <Thumbnail alt={character.name} src={character.image} />,
                ]}
                key={`character-${index}`}
              />
            );
          })}
        </CharactersTable>
      ) : null}
    </>
  );
};

export interface PokemonsListProps {
  charactersList: CharacterResume[];
  pagesQuantity: number;
  getCharacters: (pageNumber?: number) => Promise<void>;
}

export default CharactersList;
