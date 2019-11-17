import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Find the 200th prime-proof sqube containing the contiguous sub-string \"200\"";
const description: string = "\nWe shall define a sqube to be a number of the form, p2q3, where p and q are distinct primes.\nFor example, 200 = 5223 or 120072949 = 232613.\n\nThe first five squbes are 72, 108, 200, 392, and 500.\n\nInterestingly, 200 is also the first number for which you cannot change any single digit to make a prime; we shall call such numbers, prime-proof. The next prime-proof sqube which contains the contiguous sub-string \"200\" is 1992008.\n\nFind the 200th prime-proof sqube containing the contiguous sub-string \"200\".\n";
const index: number = 200;
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
