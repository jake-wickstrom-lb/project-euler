import { Problem, Strategy } from "../Problem";
const title: string = "Skew-cost coding";
const description: string = "\nLet A and B be bit strings (sequences of 0's and 1's).\nIf A is equal to the leftmost length(A) bits of B, then A is said to be a prefix of B.\nFor example, 00110 is a prefix of 001101001, but not of 00111 or 100110.\n\nA prefix-free code of size n is a collection of n distinct bit strings such that no string is a prefix of any other.  For example, this is a prefix-free code of size 6:\n\n0000, 0001, 001, 01, 10, 11\n\nNow suppose that it costs one penny to transmit a '0' bit, but four pence to transmit a '1'.\nThen the total cost of the prefix-free code shown above is 35 pence, which happens to be the cheapest possible for the skewed pricing scheme in question.\nIn short, we write Cost(6) = 35.\n\nWhat is Cost(109) ?\n";
const index: number = 219;
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
