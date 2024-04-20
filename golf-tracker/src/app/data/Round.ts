import { Course, Tee } from "./Course"

export type Round = {
    course: Course,
    teesPlayed: Tee,
    clubs: Club[],
    holeData: PlayedHoleData
}

export type PlayedHoleData = {
    holeScore: number,
    drive: shotLocation,
    approachShot: ApproachShot

}

export type ApproachShot = {
    plan: ApproachPlan,
    result: ApproachResult
}

export type ApproachPlan = {
    front: number, 
    center: number, 
    back: number, 
    toPin: number
    desiredYardage: number, 
    clubHit: Club
}

export type ApproachResult = {
    yardageToPin: number,
    accuracy: shotLocation,
    contact: Contact,
}

export enum shotLocation {
    LEFT = 1, 
    RIGHT = 2, 
    LONG = 3, 
    SHORT = 4, 
    ONTARGET = 5
}


export enum Club {
    Dr = "Dr", 
    W3 = "3W",
    W4 = "4W", 
    W5 = "5W", 
    I4 = "4i",
    I5 = "5i"
}

export enum Contact {
    FLUSH,
    FAT, 
    THIN,
    HEEL, 
    TOE
}