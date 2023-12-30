import type { Match } from "./types/Match.ts";
import { Sport } from "./types/Sport.ts";

export default class EventParser {
  getSeparator(match: Match): string | null {
    if (!match?.sport) {
      return null
    }

    const separatorMap: { [key in Sport]: string | null } = {
      [Sport.SOCCER]: '-',
      [Sport.TENNIS]: 'vs',
      [Sport.VOLLEYBALL]: '-',
      [Sport.HANDBALL]: 'vs',
      [Sport.BASKETBALL]: '-',
      [Sport.SKI_JUMPING]: null,
    }

    return separatorMap[match.sport]
  }
  makeEventName(match: Match): string | null {
    const separator: string | null = this.getSeparator(match)

    if (!separator) {
      return null
    }

    return `${match.participant1} ${separator} ${match.participant2}`
  }

  formatScore(match: Match): string | null {
    if (
      (match.sport === Sport.SOCCER || match.sport === Sport.HANDBALL) &&
      typeof match.score === 'string'
    ) {
      return match.score;
    }

    if (
      (match.sport === Sport.TENNIS || match.sport === Sport.VOLLEYBALL) &&
      typeof match.score === 'string'
    ) {
      const scores: Array<string> = match.score.split(',')

      return `Main score: ${scores[0]} (set1 ${scores[1]}, set2 ${scores[2]}, set3 ${scores[3]})`;
    }

    if (match.sport === Sport.BASKETBALL && typeof match.score === 'object') {
      return match.score.flat().join(',');
    }

    return null;
  }
}
