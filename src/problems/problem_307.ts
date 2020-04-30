import { Problem, Strategy } from "../Problem";
const title: string = "Chip Defects";
const description: string = "\n\nk defects are randomly distributed amongst n integrated-circuit chips produced by a factory (any number of defects may be found on a chip and each defect is independent of the other defects).\n\n\nLet p(k,n) represent the probability that there is a chip with at least 3 defects.\nFor instance p(3,7) \u2248 0.0204081633.\n\n\nFind p(20 000, 1 000 000) and give your answer rounded to 10 decimal places in the form 0.abcdefghij\n\n";
const index: number = 307;
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
