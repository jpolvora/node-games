import { randomUUID } from "crypto"

const template: string = `
{
    "id": "/game-cube/metroid-prime",
    "titulo": "Metroid Prime (GC)",
    "nota": 97.8,
    "ano": 2002,
    "urlImagem": "https://l3-processoseletivo.azurewebsites.net/api/CapaJogo/game-cube/metroid-prime"
  }
`

export class Game {
    constructor(
        readonly id: string,
        readonly title: string,
        readonly note: Number,
        readonly year: Number,
        readonly urlImage: String
    ) { }
}

export const enum Slot {
    Tie,
    Left,
    Right
}

export class Match {
    private winnerSlot: Slot = Slot.Tie;

    get winner() {
        return this.winnerSlot
    }

    constructor(readonly id: string, readonly left: Game, readonly right: Game) { }

    run(): [Slot, Game] {

        //compare ranking 
        this.winnerSlot = this.left.note > this.right.note ? Slot.Left : Slot.Tie;
        if (this.winnerSlot === Slot.Tie) {
            this.winnerSlot = this.right.note > this.left.note ? Slot.Right : Slot.Tie;
        }

        //is it a tie ?

        if (this.winnerSlot === Slot.Tie) {
            //compare year
        }

        //still a tie ?
        if (this.winnerSlot === Slot.Tie) {
            //compare alphabetical name
        }

        //returns the winner game
        const theGameWinner = this.winnerSlot === Slot.Left ? this.left : this.right;

        return [this.winner, theGameWinner]
    }
}


export default function run() {
    var gameId = randomUUID();

    var left = new Game(randomUUID(), "A", 1, 2000, "");
    var right = new Game(randomUUID(), "B", 2, 2001, "");

    const match = new Match(gameId, left, right);

    return match.run();
}
