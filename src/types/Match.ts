import type { SportType } from "./SportType.ts";

export interface Match {
  sport: SportType
  participant1?: string
  participant2?: string
  score?: string | Array<Array<string>>
}
