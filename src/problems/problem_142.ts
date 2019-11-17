import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Perfect Square Collection";
const description: string = "\nFind the smallest x + y + z with integers x > y > z > 0 such that x + y, x \u2212 y, x + z, x \u2212 z, y + z, y \u2212 z are all perfect squares.\n";
const index: number = 142;
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
