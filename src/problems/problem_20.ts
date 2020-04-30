import { Problem, Strategy } from "../Problem";
const title: string = "Factorial digit sum";
const description: string = "\nn! means n \u00D7 (n \u2212 1) \u00D7 ... \u00D7 3 \u00D7 2 \u00D7 1\nFor example, 10! = 10 \u00D7 9 \u00D7 ... \u00D7 3 \u00D7 2 \u00D7 1 = 3628800,and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.\nFind the sum of the digits in the number 100!\n\n";
const index: number = 20;
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
