import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Same differences";
const description: string = "\nGiven the positive integers, x, y, and z, are consecutive terms of an arithmetic progression, the least value of the positive integer, n, for which the equation, x2 \u2212 y2 \u2212 z2 = n, has exactly two solutions is n = 27:\n342 \u2212 272 \u2212 202 = 122 \u2212 92 \u2212 62 = 27\nIt turns out that n = 1155 is the least value which has exactly ten solutions.\nHow many values of n less than one million have exactly ten distinct solutions?\n\n";
const index: number = 135;
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
