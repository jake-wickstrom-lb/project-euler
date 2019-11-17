import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Investigating progressive numbers, n, which are also square";
const description: string = "\nA positive integer, n, is divided by d and the quotient and remainder are q and r respectively. In addition d, q, and r are consecutive positive integer terms in a geometric sequence, but not necessarily in that order.\nFor example, 58 divided by 6 has quotient 9 and remainder 4. It can also be seen that 4, 6, 9 are consecutive terms in a geometric sequence (common ratio 3/2).\nWe will call such numbers, n, progressive.\nSome progressive numbers, such as 9 and 10404 = 1022, happen to also be perfect squares. The sum of all progressive perfect squares below one hundred thousand is 124657.\nFind the sum of all progressive perfect squares below one trillion (1012).\n\n";
const index: number = 141;
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
