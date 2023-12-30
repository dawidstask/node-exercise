import matches from "./matches.ts";
import EventParser from "./EventParser.ts";
import type { Result } from "./types/Result.ts";

const getParsedMatches = (): Array<Result> => {
  let matchesParsed: Array<Result> = [];

  matches.forEach(match => {
    const parser: EventParser = new EventParser()
    const name: string | null = parser.makeEventName(match)
    const score: string | null = parser.formatScore(match)

    if (name !== null && score !== null) {
      matchesParsed.push({
        name,
        score
      })
    }
  })

  return matchesParsed
}

export default getParsedMatches;