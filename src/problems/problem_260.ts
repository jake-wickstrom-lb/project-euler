import { Problem, Strategy } from "../Problem";
const title: string = "Stone Game";
const description: string = "\nA game is played with three piles of stones and two players.\nAt her turn, a player removes one or more stones from the piles. However, if she takes stones from more than one pile, she must remove the same number of stones from each of the selected piles.\n\nIn other words, the player chooses some N>0 and removes:\nN stones from any single pile; or\nN stones from each of any two piles (2N total); or\nN stones from each of the three piles (3N total).\nThe player taking the last stone(s) wins the game.\n\nA winning configuration is one where the first player can force a win.\nFor example, (0,0,13), (0,11,11) and (5,5,5) are winning configurations because the first player can immediately remove all stones.\n\nA losing configuration is one where the second player can force a win, no matter what the first player does. \nFor example, (0,1,2) and (1,3,3) are losing configurations: any legal move leaves a winning configuration for the second player.\n\nConsider all  losing configurations (xi,yi,zi) where xi \u2264 yi \u2264 zi \u2264 100.\nWe can verify that \u2211\u2009(xi+yi+zi) = 173895 for these.\n\nFind \u2211\u2009(xi+yi+zi) where (xi,yi,zi) ranges over the losing configurations\nwith xi \u2264 yi \u2264 zi \u2264 1000.\n";
const index: number = 260;
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
