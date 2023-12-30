import matches from "./matches.ts";
import EventParser from "./EventParser.ts";

const getParsedMatches = () => {
  let matchesParsed = [];

  for (var i = 0; i < (matches.length); i++) {
    let parser = new EventParser()
    let name = parser.makeEventName(matches[i])
    let score = parser.formatScore(matches[i])

    if (name !== 'Exception: invalid sport' && score !== 'Exception: invalid sport') {
      matchesParsed.push({
        name,
        score
      })
    }
  }

  return matchesParsed
}

export default getParsedMatches;