import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Paper-strip Game";
const description: string = "\nThe following game is a classic example of Combinatorial Game Theory:\n\nTwo players start with a strip of n white squares and they take alternate turns.\nOn each turn, a player picks two contiguous white squares and paints them black.\nThe first player who cannot make a move loses.\n\nIf n = 1, there are no valid moves, so the first player loses automatically.\nIf n = 2, there is only one valid move, after which the second player loses.\nIf n = 3, there are two valid moves, but both leave a situation where the second player loses.\nIf n = 4, there are three valid moves for the first player; she can win the game by painting the two middle squares.\nIf n = 5, there are four valid moves for the first player (shown below in red); but no matter what she does, the second player (blue) wins.\n\n\n\nSo, for 1 \u2264 n \u2264 5, there are 3 values of n for which the first player can force a win.\nSimilarly, for 1 \u2264 n \u2264 50, there are 40 values of n for which the first player can force a win.\n\nFor 1 \u2264 n \u2264 1 000 000, how many values of n are there for which the first player can force a win?\n";
const index: number = 306;
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
