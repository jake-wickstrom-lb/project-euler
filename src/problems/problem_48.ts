import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Self powers";
const description: string = "\n\nThe series, 11 + 22 + 33 + ... + 1010 = 10405071317.\nFind the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.\n\n";
const index: number = 48;
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
