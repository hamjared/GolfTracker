export type Course = {
    name: string, 
    holes: Hole[],
    tees: Record<string, Tee> // map tee name to Tee data. 

}

export type Hole = {
    par: Record<string, number>, // Maps the tee name to the par for the hole. 
    yardage: Record<string, number>, // maps tee name to the yardage for the hole. 
    handicap: Record<string, number> // Maps tee name to the hole handicap
}

export type Tee = {
    name: string,
    rating: number, 
    slope: number
}



