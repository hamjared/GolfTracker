import { Club, Round } from "./Round"

export type Golfer = {
    name: string, 
    handicap: number[],
    clubs: Club[],
    Rounds: Round[]
}