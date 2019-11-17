import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Large non-Mersenne prime";
const description: string = "\nThe first known prime found to exceed one million digits was discovered in 1999, and is a Mersenne prime of the form 26972593\u22121; it contains exactly 2,098,960 digits. Subsequently other Mersenne primes, of the form 2p\u22121, have been found which contain more digits.\nHowever, in 2004 there was found a massive non-Mersenne prime which contains 2,357,207 digits: 28433\u00D727830457+1.\nFind the last ten digits of this prime number.\n\n";
const index: number = 97;
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
