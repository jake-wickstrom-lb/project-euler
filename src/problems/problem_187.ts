import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Semiprimes";
const description: string = "\nA composite is a number containing at least two prime factors. For example, 15 = 3 \u00D7 5; 9 = 3 \u00D7 3; 12 = 2 \u00D7 2 \u00D7 3.\n\nThere are ten composites below thirty containing precisely two, not necessarily distinct, prime factors:\n4, 6, 9, 10, 14, 15, 21, 22, 25, 26.\n\nHow many composite integers, n < 108, have precisely two, not necessarily distinct, prime factors?\n";
const index: number = 187;
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
