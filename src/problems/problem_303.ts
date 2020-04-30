import { Problem, Strategy } from "../Problem";
const title: string = "Multiples with small digits";
const description: string = "\n\nFor a positive integer n, define f(n) as the least positive multiple of n that, written in base 10, uses only digits \u2264 2.\nThus f(2)=2, f(3)=12, f(7)=21, f(42)=210, f(89)=1121222.\nAlso, $\\sum \\limits_{n = 1}^{100} {\\dfrac{f(n)}{n}} = 11363107$.\n\nFind $\\sum \\limits_{n=1}^{10000} {\\dfrac{f(n)}{n}}$.\n\n\n";
const index: number = 303;
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
