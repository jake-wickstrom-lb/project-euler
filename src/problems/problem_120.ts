import { Problem, Strategy } from "../Problem";
const title: string = "Square remainders";
const description: string = "\n\nLet r be the remainder when (a\u22121)n + (a+1)n is divided by a2.\nFor example, if a = 7 and n = 3, then r = 42: 63 + 83 = 728 \u2261 42 mod 49. And as n varies, so too will r, but for a = 7 it turns out that rmax = 42.\nFor 3 \u2264 a \u2264 1000, find \u2211 rmax.\n\n";
const index: number = 120;
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
