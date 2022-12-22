/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
import { renderHook, act } from "@testing-library/react-hooks";
import { useCharacters } from "./useCharacters";
import charactersJson from "../mocks/characters.json";
import { FetchMock } from "jest-fetch-mock";
import { cleanup, waitFor } from "@testing-library/react";
require("isomorphic-fetch");

const fetch = global.fetch as FetchMock;

describe("Use characters hook test", () => {
  afterEach((): void => {
    fetch.resetMocks();
    cleanup();
  });

  beforeEach((): void => {
    fetch.resetMocks();
    fetch.mockResponse(JSON.stringify(charactersJson));
  });

  test("should use characters", () => {
    //ARRANGE
    const charactersQuantity = 0;

    //ACT
    const { result } = renderHook(() => useCharacters());

    //ASERT
    expect(result.current.charactersList.length).toBe(charactersQuantity);
    expect(result.current.pagesQuantity).toBe(1);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeUndefined();
    expect(typeof result.current.getCharacters).toBe("function");
  });

  test("should get characters", async () => {
    //ARRANGE
    const charactersQuantity = 20;
    const pagesQuantity = 42;

    //ACT
    const { result } = renderHook(() => useCharacters());
    act(() => {
      result.current.getCharacters();
    });

    //ASERT
    await waitFor(() =>
      expect(result.current.charactersList.length).toBe(charactersQuantity)
    );
    await waitFor(() =>
      expect(result.current.pagesQuantity).toBe(pagesQuantity)
    );
    await waitFor(() => expect(result.current.loading).toBeFalsy());
    await waitFor(() => expect(result.current.error).toBeUndefined());
  });
});
