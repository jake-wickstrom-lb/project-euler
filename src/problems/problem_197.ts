import { Problem, Strategy } from "../Problem";
const title: string = "Investigating the behaviour of a recursively defined sequence";
const description: string = "\nGiven is the function f(x) = \u230A230.403243784-x2\u230B \u00D7 10-9 ( \u230A \u230B is the floor-function),\nthe sequence un is defined by u0 = -1 and un+1 = f(un).\n\nFind un + un+1 for n = 1012.\nGive your answer with 9 digits after the decimal point.\n";
const index: number = 197;
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
