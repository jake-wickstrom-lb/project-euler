import { Problem, Strategy } from "../Problem";
const title: string = "Prime square remainders";
const description: string = "\n\nLet pn be the nth prime: 2, 3, 5, 7, 11, ..., and let r be the remainder when (pn\u22121)n + (pn+1)n is divided by pn2.\nFor example, when n = 3, p3 = 5, and 43 + 63 = 280 \u2261 5 mod 25.\nThe least value of n for which the remainder first exceeds 109 is 7037.\nFind the least value of n for which the remainder first exceeds 1010.\n\n";
const index: number = 123;
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
