import { Problem, Strategy } from "../Problem";
const title: string = "Lattice paths";
const description: string = "\nStarting in the top left corner of a 2\u00D72 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.\n\n\nHow many such routes are there through a 20\u00D720 grid?\n\n";
const index: number = 15;
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
