import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Counting numbers with at least four distinct prime factors less than 100";
const description: string = "\nIt can be verified that there are 23 positive integers less than 1000 that are divisible by at least four distinct primes less than 100.\n\nFind how many positive integers less than 1016 are divisible by at least four distinct primes less than 100.\n\n\n";
const index: number = 268;
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
