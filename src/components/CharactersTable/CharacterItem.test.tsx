/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CharacterItem from "./CharacterItem";

describe("CharacterItem Test", function () {
  it("Mount the component", () => {
    //ARRANGE
    const cells = ["Nombre", "Estado", "Tipo"];
    const cellsCount = 3;

    //ASSERT
    const { container } = render(
      <table>
        <tbody>
          <CharacterItem cells={cells} />
        </tbody>
      </table>
    );

    //ASSERT
    expect(container.getElementsByTagName("td").length).toBe(cellsCount);
  });
});
