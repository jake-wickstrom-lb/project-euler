import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Investigating the primality of numbers of the form 2n2-1";
const description: string = "\nConsider numbers t(n) of the form t(n) = 2n2-1 with n > 1.\nThe first such numbers are 7, 17, 31, 49, 71, 97, 127 and 161.\nIt turns out that only 49 = 7*7 and 161 = 7*23 are not prime.\nFor n \u2264 10000 there are 2202 numbers t(n)  that are prime.\n\nHow many numbers t(n) are prime for n \u2264 50,000,000 ?\n\n\n";
const index: number = 216;
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
