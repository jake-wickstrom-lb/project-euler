import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Sum of sum of divisors";
const description: string = "\nLet d(k) be the sum of all divisors of k.\nWe define the function S(N) = $\\sum_{i=1}^N \\sum_{j=1}^Nd(i \\cdot j)$.\nFor example, S(3) = d(1) + d(2) + d(3) + d(2) + d(4) + d(6) + d(3) + d(6) + d(9) = 59.\n\nYou are given that S(103) = 563576517282 and S(105) mod 109 = 215766508.\nFind S(1011) mod 109.\n\n";
const index: number = 439;
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
