import { Problem, Strategy } from "../Problem";
const title: string = "Numbers for which Euler\u2019s totient function equals 13!";
const description: string = "\nThe first number n for which \u03C6(n)=13! is 6227180929.\nFind the 150,000th such number.\n\n";
const index: number = 248;
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
