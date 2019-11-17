import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Almost right-angled triangles I";
const description: string = "\nLet us call an integer sided triangle with sides a \u2264 b \u2264 c barely acute if the sides satisfy a2 + b2 = c2 + 1.\n\nHow many barely acute triangles are there with perimeter \u2264 25,000,000?\n\n \n\n";
const index: number = 223;
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
