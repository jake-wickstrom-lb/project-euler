import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Disc game prize fund";
const description: string = "\nA bag contains one red disc and one blue disc. In a game of chance a player takes a disc at random and its colour is noted. After each turn the disc is returned to the bag, an extra red disc is added, and another disc is taken at random.\nThe player pays \u00A31 to play and wins if they have taken more blue discs than red discs at the end of the game.\nIf the game is played for four turns, the probability of a player winning is exactly 11/120, and so the maximum prize fund the banker should allocate for winning in this game would be \u00A310 before they would expect to incur a loss. Note that any payout will be a whole number of pounds and also includes the original \u00A31 paid to play the game, so in the example given the player actually wins \u00A39.\nFind the maximum prize fund that should be allocated to a single game in which fifteen turns are played.\n\n";
const index: number = 121;
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
