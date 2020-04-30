import { Problem, Strategy } from "../Problem";
const title: string = "Factorials divisible by a huge integer";
const description: string = "\n\nLet N(i) be the smallest integer n such that n! is divisible by (i!)1234567890\n\nLet S(u)=\u2211\u2009N(i) for 10 \u2264 i \u2264 u.\n\n\nS(1000)=614538266565663.\n\n\nFind S(1 000 000) mod 1018.\n\n\n\n";
const index: number = 320;
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
