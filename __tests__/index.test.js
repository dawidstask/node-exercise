import { test, expect } from '@jest/globals';
import result from "./result.ts";
import getParsedMatches from "../src/getParsedMatches.js";

test('result', () => {
  expect(getParsedMatches()).toStrictEqual(result)
})