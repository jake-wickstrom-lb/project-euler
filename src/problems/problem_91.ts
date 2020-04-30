import { Problem, Strategy } from "../Problem";
const title: string = "Right triangles with integer coordinates";
const description: string = "\nThe points P (x1, y1) and Q (x2, y2) are plotted at integer co-ordinates and are joined to the origin, O(0,0), to form \u0394OPQ.\n\n\n\n\nThere are exactly fourteen triangles containing a right angle that can be formed when each co-ordinate lies between 0 and 2 inclusive; that is,0 \u2264 x1, y1, x2, y2 \u2264 2.\n\n\n\n\nGiven that 0 \u2264 x1, y1, x2, y2 \u2264 50, how many right triangles can be formed?\n";
const index: number = 91;
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
