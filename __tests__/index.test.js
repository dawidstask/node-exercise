import { test, expect } from '@jest/globals';
import result from "./result.js";
import getParsedMatches from "../src/getParsedMatches.js";

test('result', () => {
  expect(getParsedMatches()).toStrictEqual(result)
})