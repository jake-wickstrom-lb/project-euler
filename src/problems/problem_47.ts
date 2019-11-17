import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Distinct primes factors";
const description: string = "\nThe first two consecutive numbers to have two distinct prime factors are:\n14 = 2 \u00D7 715 = 3 \u00D7 5\nThe first three consecutive numbers to have three distinct prime factors are:\n644 = 2\u00B2 \u00D7 7 \u00D7 23645 = 3 \u00D7 5 \u00D7 43646 = 2 \u00D7 17 \u00D7 19.\nFind the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?\n\n";
const index: number = 47;
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
