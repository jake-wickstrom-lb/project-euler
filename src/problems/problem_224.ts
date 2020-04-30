import { Problem, Strategy } from "../Problem";
const title: string = "Almost right-angled triangles II";
const description: string = "\nLet us call an integer sided triangle with sides a \u2264 b \u2264 c barely obtuse if the sides satisfy a2 + b2 = c2 - 1.\n\nHow many barely obtuse triangles are there with perimeter \u2264 75,000,000?\n\n";
const index: number = 224;
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
