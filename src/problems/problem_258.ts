import { Problem, Strategy } from "../Problem";
const title: string = "A lagged Fibonacci sequence";
const description: string = "\nA sequence is defined as:\n\ngk = 1, for 0 \u2264 k \u2264 1999\ngk = gk-2000 + gk-1999, for k \u2265 2000.\nFind gk mod 20092010 for k = 1018.\n";
const index: number = 258;
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
