import { Problem, Strategy } from "../Problem";
const title: string = "Arithmetic expressions";
const description: string = "\nBy using each of the digits from the set, {1, 2, 3, 4}, exactly once, and making use of the four arithmetic operations (+, \u2212, *, /) and brackets/parentheses, it is possible to form different positive integer targets.\nFor example,\n8 = (4 * (1 + 3)) / 2\n14 = 4 * (3 + 1 / 2)\n19 = 4 * (2 + 3) \u2212 1\n36 = 3 * 4 * (2 + 1)\nNote that concatenations of the digits, like 12 + 34, are not allowed.\nUsing the set, {1, 2, 3, 4}, it is possible to obtain thirty-one different target numbers of which 36 is the maximum, and each of the numbers 1 to 28 can be obtained before encountering the first non-expressible number.\nFind the set of four distinct digits, a < b < c < d, for which the longest set of consecutive positive integers, 1 to n, can be obtained, giving your answer as a string: abcd.\n\n";
const index: number = 93;
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
