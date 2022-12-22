/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CharactersTable from "./CharactersTable";
import CharacterItem from "./CharacterItem";
describe("CharactersTable", function () {
  it("Mount the component", () => {
    //ARRANGE
    const tablesCount = 1;
    const rowsCount = 4; // body rows plus header row
    const headersCount = 3;
    const headers = ["Nombre", "Tipo", "Estado"];
    const currentPage = 1;
    const lastPage = 5;
    const cells = ["Nombre", "Estado", "Tipo"];
    const rows = [
      <CharacterItem key="character1tem-1" cells={cells} />,
      <CharacterItem key="character1tem-2" cells={cells} />,
      <CharacterItem key="character1tem-3" cells={cells} />,
    ];
    const setPage = () => {};

    const { container, getByText } = render(
      <CharactersTable
        headers={headers}
        currentPage={currentPage}
        lastPage={lastPage}
        setPage={setPage}
      >
        {rows}
      </CharactersTable>
    );

    //ASSERT
    expect(container.getElementsByTagName("table").length).toBe(tablesCount);
    expect(container.getElementsByTagName("tr").length).toBe(rowsCount);
    expect(container.getElementsByTagName("th").length).toBe(headersCount);
    expect(getByText(currentPage)).toBeTruthy();
  });
});
