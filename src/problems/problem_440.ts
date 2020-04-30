import { Problem, Strategy } from "../Problem";
const title: string = "GCD and Tiling";
const description: string = "\nWe want to tile a board of length n and height 1 completely, with either 1 \u00D7 2 blocks or 1 \u00D7 1 blocks with a single decimal digit on top:\n\n\n\nFor example, here are some of the ways to tile a board of length n = 8:\n\n\n\n\nLet T(n) be the number of ways to tile a board of length n as described above.\n\nFor example, T(1) = 10 and T(2) = 101.\n\nLet S(L) be the triple sum \u2211a,b,c\u2009gcd(T(ca), T(cb)) for 1 \u2264 a, b, c \u2264 L.\nFor example:\nS(2) = 10444\nS(3) = 1292115238446807016106539989\nS(4) mod 987\u00A0898\u00A0789 = 670616280.\n\nFind S(2000) mod 987\u00A0898\u00A0789.\n";
const index: number = 440;
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
