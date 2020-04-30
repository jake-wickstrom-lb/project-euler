import { Problem, Strategy } from "../Problem";
const title: string = "Pivotal Square Sums";
const description: string = "\nLet us call a positive integer k a square-pivot, if there is a pair of integers m > 0 and n \u2265 k, such that the sum of the (m+1) consecutive squares up to k equals the sum of the m consecutive squares from (n+1) on:\n\n(k-m)2 + ... + k2 = (n+1)2 + ... + (n+m)2.\n\nSome small square-pivots are\n4: 32 + 42\n = 52\n21: 202 + 212 = 292\n24: 212 + 222 + 232 + 242 = 252 + 262 + 272\n110: 1082 + 1092 + 1102 = 1332 + 1342Find the sum of all distinct square-pivots \u2264 1010.\n";
const index: number = 261;
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
