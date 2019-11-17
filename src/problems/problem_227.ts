import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "The Chase";
const description: string = "\n\"The Chase\" is a game played with two dice and an even number of players.\n\nThe players sit around a table; the game begins with two opposite players having one die each. On each turn, the two players with a die roll it.\nIf a player rolls a 1, he passes the die to his neighbour on the left; if he rolls a 6, he passes the die to his neighbour on the right; otherwise, he keeps the die for the next turn.\nThe game ends when one player has both dice after they have been rolled and passed; that player has then lost.\n\nIn a game with 100 players, what is the expected number of turns the game lasts?\nGive your answer rounded to ten significant digits.\n";
const index: number = 227;
class Solution extends Strategy {
    public validateArgs(args: any[]) {
        throw new Error("Method not implemented.");
    }
    public solve(args: any[]) {
        throw new Error("Method not implemented.");
    }
}
const solution = new Solution();
const ProblemImplementation = new Problem(title, description, solution);
ProblemManager.register(index, ProblemImplementation);
