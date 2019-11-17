import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "The inverse summation of coprime couples";
const description: string = "\n\nFor an integer M, we define R(M) as the sum of 1/(p\u00B7q) for all the integer pairs p and q which satisfy all of these conditions:\n\n 1 \u2264 p < q \u2264 M\n p + q \u2265 M\n p and q are coprime.\n\nWe also define S(N) as the sum of R(i) for 2 \u2264 i \u2264 N.\nWe can verify that S(2) = R(2) = 1/2, S(10) \u2248 6.9147 and S(100) \u2248 58.2962.\n\n\nFind S(107). Give your answer rounded to four decimal places.\n\n";
const index: number = 441;
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
