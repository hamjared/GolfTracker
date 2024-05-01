import { Club, Contact, Round, shotLocation } from "../Round";

export const mockRounds: Round[] = [
    {
        id: 0,
        courseName: "Some Course",
        teesPlayed: "Blue",
        date: new Date(2024, 4, 27),
        clubs: [],
        holeData: [{
            holeScore: 0,
            drive: shotLocation.LEFT,
            approachShot: {
                plan: {
                    front: 0,
                    center: 0,
                    back: 0,
                    toPin: 0,
                    desiredYardage: 0,
                    clubHit: Club.I5
                },
                result: {
                    yardageToPin: 0,
                    accuracy: shotLocation.LEFT,
                    contact: Contact.FLUSH
                }
            },
            id: 0,
            holeNumber: 1
        }],
        score: 82,
        differential: 12
    },
    {
        id: 0,
        courseName: "Some Other Course",
        teesPlayed: "White",
        date: new Date(2024, 3, 27),
        clubs: [],
        holeData: [{
            holeScore: 0,
            drive: shotLocation.LEFT,
            approachShot: {
                plan: {
                    front: 0,
                    center: 0,
                    back: 0,
                    toPin: 0,
                    desiredYardage: 0,
                    clubHit: Club.I5
                },
                result: {
                    yardageToPin: 0,
                    accuracy: shotLocation.LEFT,
                    contact: Contact.FLUSH
                }
            },
            holeNumber: 1,
            id: 1
        }],
        score: 85,
        differential: 13
    }
]