import type { Match } from "./types/Match.ts";
import { Sport } from "./types/Sport.ts";

export default class EventParser {
  makeEventName(match: Match): string | null {
    const separatorMap: { [key in Sport]: string | null } = {
      [Sport.SOCCER]: '-',
      [Sport.TENNIS]: 'vs',
      [Sport.VOLLEYBALL]: '-',
      [Sport.HANDBALL]: 'vs',
      [Sport.BASKETBALL]: '-',
      [Sport.SKI_JUMPING]: null,
    }

    const separator: string | null = separatorMap[match.sport]

    if (!separator) {
      return null
    }

    return `${match.participant1} ${separator} ${match.participant2}`
  }

  formatScore(match) {
    if (match.sport === 'soccer') {
      return match.score;
    } else if (match.sport === 'tennis') {
      var scores = /([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+)/.exec(match.score);
      var set1 = scores[2];
      var set2 = scores[3];
      var set3 = scores[4];

      return "Main score: " + scores[1] + " ("
        + "set1 " + set1 + ", "
        + "set2 " + set2 + ", "
        + "set3 " + set3
        + ")";
    } else if (match.sport === 'volleyball') {
      var scores = /([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+)/.exec(match.score);
      var set1 = scores[2];
      var set2 = scores[3];
      var set3 = scores[4];

      return "Main score: " + scores[1] + " ("
        + "set1 " + set1 + ", "
        + "set2 " + set2 + ", "
        + "set3 " + set3
        + ")";
    } else if (match.sport === 'basketball') {
      return match.score[0][0] + ',' + match.score[0][1] + ',' + match.score[1][0] + ',' + match.score[1][1];
    } else if (match.sport === 'handball') {
      return match.score;
    } else {
      return "Exception: invalid sport";
    }
  }
}
