import { Problem, Strategy } from "../Problem";
const title: string = "Tours on a 4 x n playing board";
const description: string = "\nLet T(n) be the number of tours over a 4 \u00D7 n playing board such that:\nThe tour starts in the top left corner.\nThe tour consists of moves that are up, down, left, or right one square.\nThe tour visits each square exactly once.\nThe tour ends in the bottom left corner.\nThe diagram shows one tour over a 4 \u00D7 10 board:\n\n\n\n\nT(10) is 2329. What is T(1012) modulo 108?\n";
const index: number = 237;
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
