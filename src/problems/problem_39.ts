import { Problem, Strategy } from "../Problem";
const title: string = "Integer right triangles";
const description: string = "\nIf p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.\n{20,48,52}, {24,45,51}, {30,40,50}\nFor which value of p \u2264 1000, is the number of solutions maximised?\n\n";
const index: number = 39;
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
