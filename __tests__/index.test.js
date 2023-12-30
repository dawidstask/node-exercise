import { test, expect } from '@jest/globals';
import result from "./result.ts";
import getParsedMatches from "../src/getParsedMatches.js";
import EventParser from "../src/EventParser.js";
import matches from "../src/matches.js";

const parser = new EventParser()
test('getSeparator method test', () => {
  expect(parser.getSeparator(matches[0])).toBe('-')
  expect(parser.getSeparator(matches[1])).toBe('-')
  expect(parser.getSeparator(matches[2])).toBe('vs')
  expect(parser.getSeparator(matches[3])).toBe('-')
  expect(parser.getSeparator(matches[4])).toBe('vs')
  expect(parser.getSeparator(matches[5])).toBe(null)
})

test('makeEventName method test', () => {
  matches.forEach((match, index) => {
    expect(parser.makeEventName(match)).toBe(index !== 5 ? result[index].name : null)
  })
})

test('result', () => {
  expect(getParsedMatches()).toStrictEqual(result)
})