import { randomUUID } from "crypto"

export class Game {
    constructor(readonly id: string, readonly name: string, readonly ranking: Number, readonly year: Number) {

    }
}

export enum Slot {
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
        this.winnerSlot = this.left.ranking > this.right.ranking ? Slot.Left : Slot.Tie;
        if (this.winnerSlot === Slot.Tie) {
            this.winnerSlot = this.right.ranking > this.left.ranking ? Slot.Right : Slot.Tie;
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

    var left = new Game(randomUUID(), "A", 1, 2000);
    var right = new Game(randomUUID(), "B", 2, 2001);

    const match = new Match(gameId, left, right);

    return match.run();
}
