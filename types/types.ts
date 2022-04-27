export default interface IPlayer {
    id: string
    firstName: string
    lastName: string
    age: number
    position: Positon
    skills: []
}

export enum Positon {
    goalkeeper = "Goalkeeper",
    defender = "Defender",
    midfielder = "Midfielder",
    striker = "Striker",
}

