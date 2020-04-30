import { Problem, Strategy } from "../Problem";
const title: string = "Perfection Quotients";
const description: string = "\nFor a positive integer n, let \u03C3(n) be the sum of all divisors of n, so e.g. \u03C3(6) = 1 + 2 + 3 + 6 = 12.\n\n\nA perfect number, as you probably know, is a number with \u03C3(n) = 2n.\n\nLet us define the perfection quotient of a positive integer asp(n)=\u00A0\n\u03C3(n)n\n.\nFind the sum of all positive integers n \u2264 1018 for which p(n) has the form k + 1\u20442, where k is an integer.\n";
const index: number = 241;
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
