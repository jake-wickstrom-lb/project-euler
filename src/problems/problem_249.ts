import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Prime Subset Sums";
const description: string = "\nLet S = {2, 3, 5, ..., 4999} be the set of prime numbers less than 5000.\nFind the number of subsets of S, the sum of whose elements is a prime number.\nEnter the rightmost 16 digits as your answer.\n";
const index: number = 249;
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
