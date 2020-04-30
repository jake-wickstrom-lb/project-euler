import { Problem, Strategy } from "../Problem";
const title: string = "Finding numbers for which the sum of the squares of the digits is a square";
const description: string = "\nFor a positive integer n, let f(n) be the sum of the squares of the digits (in base 10) of n, e.g.\nf(3) = 32 = 9,\nf(25) = 22 + 52 = 4 + 25 = 29,\nf(442) = 42 + 42 + 22 = 16 + 16 + 4 = 36\nFind the last nine digits of the sum of all n, 0 < n < 1020, such that f(n) is a perfect square.\n";
const index: number = 171;
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
