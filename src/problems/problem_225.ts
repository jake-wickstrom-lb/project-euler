import { Problem, Strategy } from "../Problem";
const title: string = "Tribonacci non-divisors";
const description: string = "\n\nThe sequence 1, 1, 1, 3, 5, 9, 17, 31, 57, 105, 193, 355, 653, 1201 ...\nis defined by T1 = T2 = T3 = 1 and Tn = Tn-1 + Tn-2 + Tn-3.\n\n\nIt can be shown that 27 does not divide any terms of this sequence.In fact, 27 is the first odd number with this property.\n\nFind the 124th odd number that does not divide any terms of the above sequence.\n";
const index: number = 225;
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
