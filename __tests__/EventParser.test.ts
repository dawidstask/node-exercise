import { expect, describe, it } from '@jest/globals';
import result from "./result.ts";
import EventParser from "../src/EventParser.js";
import matches from "../src/matches.js";
import type { Match } from "../src/types/Match.ts";

const parser: EventParser = new EventParser()

describe('EventParser', () => {
  it('Should return specific separator', () => {
    expect(parser.getSeparator(matches[0])).toBe('-')
    expect(parser.getSeparator(matches[1])).toBe('-')
    expect(parser.getSeparator(matches[2])).toBe('vs')
    expect(parser.getSeparator(matches[3])).toBe('-')
    expect(parser.getSeparator(matches[4])).toBe('vs')
    expect(parser.getSeparator(matches[5])).toBe(null)
  })
  it('Should return specific event name', () => {
    matches.forEach((match: Match, index: number) => {
      expect(parser.makeEventName(match)).toBe(index < 5 ? result[index].name : null)
    })

  })
  it('Should return specific format score', () => {
    matches.forEach((match: Match, index: number) => {
      expect(parser.formatScore(match)).toStrictEqual(index < 5 ? result[index].score : null)
    })
  })
});
