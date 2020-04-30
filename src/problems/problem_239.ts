import { Problem, Strategy } from "../Problem";
const title: string = "Twenty-two Foolish Primes";
const description: string = "\nA set of disks numbered 1 through 100 are placed in a line in random order.\n\nWhat is the probability that we have a partial derangement such that exactly 22 prime number discs are found away from their natural positions?\n(Any number of non-prime disks may also be found in or out of their natural positions.)\n\nGive your answer rounded to 12 places behind the decimal point in the form 0.abcdefghijkl.\n\n";
const index: number = 239;
class Solution extends Strategy {
    public validateArgs(args: any[]) {
        throw new Error("Method not implemented.");
    }
    public solve(args: any[]) {
        throw new Error("Method not implemented.");
    }
}
const solution = new Solution();
export const ProblemImplementation = new Problem(index, title, description, solution);
