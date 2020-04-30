import { Problem, Strategy } from "../Problem";
const title: string = "Divisor Square Sum";
const description: string = "\nFor a positive integer n, let \u03C32(n) be the sum of the squares of its divisors. For example,\n\u03C32(10) = 1 + 4 + 25 + 100 = 130.\nFind the sum of all n, 0 < n < 64,000,000 such that \u03C32(n) is a perfect square.\n";
const index: number = 211;
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
