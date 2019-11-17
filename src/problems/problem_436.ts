import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Unfair wager";
const description: string = "\nJulie proposes the following wager to her sister Louise.\nShe suggests they play a game of chance to determine who will wash the dishes.\nFor this game, they shall use a generator of independent random numbers uniformly distributed between 0 and 1.\nThe game starts with S = 0.\nThe first player, Louise, adds to S different random numbers from the generator until S > 1 and records her last random number 'x'.\nThe second player, Julie, continues adding to S different random numbers from the generator until S > 2 and records her last random number 'y'.\nThe player with the highest number wins and the loser washes the dishes, i.e. if y > x the second player wins.\n\nFor example, if the first player draws 0.62 and 0.44, the first player turn ends since 0.62+0.44 > 1 and x = 0.44.\nIf the second players draws 0.1, 0.27 and 0.91, the second player turn ends since 0.62+0.44+0.1+0.27+0.91 > 2 and y = 0.91.\nSince y > x, the second player wins.\n\nLouise thinks about it for a second, and objects: \"That's not fair\".\nWhat is the probability that the second player wins?\nGive your answer rounded to 10 places behind the decimal point in the form 0.abcdefghij\n\n";
const index: number = 436;
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
