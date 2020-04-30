import { Problem, Strategy } from "../Problem";
const title: string = "Hopping Game";
const description: string = "\n\nLet sk be the number of 1\u2019s when writing the numbers from 0 to k in binary.\nFor example, writing 0 to 5 in binary, we have 0, 1, 10, 11, 100, 101. There are seven 1\u2019s, so s5 = 7.\nThe sequence S = {sk : k \u2265 0} starts {0, 1, 2, 4, 5, 7, 9, 12, ...}.\n\n\nA game is played by two players. Before the game starts, a number n is chosen. A counter c starts at 0. At each turn, the player chooses a number from 1 to n (inclusive) and increases c by that number. The resulting value of c must be a member of S. If there are no more valid moves, the player loses.\n\n\n\nFor example:\nLet n = 5. c starts at 0.\nPlayer 1 chooses 4, so c becomes 0 + 4 = 4.\nPlayer 2 chooses 5, so c becomes 4 + 5 = 9.\nPlayer 1 chooses 3, so c becomes 9 + 3 = 12.\netc.\nNote that c must always belong to S, and each player can increase c by at most n.\n\n\n\nLet M(n) be the highest number the first player can choose at her first turn to force a win, and M(n) = 0 if there is no such move. For example, M(2) = 2, M(7) = 1 and M(20) = 4.\n\n\n\nGiven \u2211\u2009(M(n))3 = 8150 for 1 \u2264 n \u2264 20.\n\n\n\nFind \u2211\u2009(M(n))3 for 1 \u2264 n \u2264 1000.\n\n";
const index: number = 391;
class Solution extends Strategy {
    public validateArgs(args: any[]) {
        throw new Error("Method not implemented.");
    }
    public solve(args: any[]) {
        throw new Error("Method not implemented.");
    }
}
const solution = new Solution();
export const ProblemImplementation = new Problem(index, title, description, solution);
