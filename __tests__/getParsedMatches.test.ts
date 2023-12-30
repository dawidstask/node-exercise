import { describe, expect, it } from "@jest/globals";
import getParsedMatches from "../src/getParsedMatches.ts";
import result from "./result.ts";

describe('Result', () => {
  it('Should return equal result', () => {
    expect(getParsedMatches()).toStrictEqual(result)
  })
});
