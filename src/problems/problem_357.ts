import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Prime generating integers";
const description: string = "\n\nConsider the divisors of 30: 1,2,3,5,6,10,15,30.\nIt can be seen that for every divisor d of 30, d+30/d is prime.\n\n\nFind the sum of all positive integers n not exceeding 100 000 000such that\nfor every divisor d of n, d+n/d is prime.\n\n\n";
const index: number = 357;
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
