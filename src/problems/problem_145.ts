import { Problem, Strategy } from "../Problem";
const title: string = "How many reversible numbers are there below one-billion?";
const description: string = "\nSome positive integers n have the property that the sum [ n + reverse(n) ] consists entirely of odd (decimal) digits. For instance, 36 + 63 = 99 and 409 + 904 = 1313. We will call such numbers reversible; so 36, 63, 409, and 904 are reversible. Leading zeroes are not allowed in either n or reverse(n).\n\nThere are 120 reversible numbers below one-thousand.\n\nHow many reversible numbers are there below one-billion (109)?\n";
const index: number = 145;
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
