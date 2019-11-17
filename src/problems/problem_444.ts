import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "The Roundtable Lottery";
const description: string = "\nA group of p people decide to sit down at a round table and play a lottery-ticket trading game. Each person starts off with a randomly-assigned, unscratched lottery ticket. Each ticket, when scratched, reveals a whole-pound prize ranging anywhere from \u00A31 to \u00A3p, with no two tickets alike. The goal of the game is for each person to maximize his ticket winnings upon leaving the game.\n\nAn arbitrary person is chosen to be the first player. Going around the table, each player has only one of two options:\n\n1. The player can scratch his ticket and reveal its worth to everyone at the table.\n2. The player can trade his unscratched ticket for a previous player's scratched ticket, and then leave the game with that ticket. The previous player then scratches his newly-acquired ticket and reveals its worth to everyone at the table.\n\nThe game ends once all tickets have been scratched. All players still remaining at the table must leave with their currently-held tickets.\n\nAssume that each player uses the optimal strategy for maximizing the expected value of his ticket winnings. \n\nLet E(p) represent the expected number of players left at the table when the game ends in a game consisting of p players (e.g. E(111)\u00A0=\u00A05.2912 when rounded to 5 significant digits).\n\nLet $S_1(N) = \\sum \\limits_{p = 1}^{N} {E(p)}$.\nLet $S_k(N) = \\sum \\limits_{p = 1}^{N} {S_{k-1}(p)}$ for $k \\gt 1$.\n\nFind S20(1014) and write the answer in scientific notation rounded to 10 significant digits. Use a lowercase e to separate mantissa and exponent (e.g. S3(100) = 5.983679014e5).\n\n";
const index: number = 444;
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
