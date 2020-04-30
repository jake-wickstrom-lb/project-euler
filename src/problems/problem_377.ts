import { Problem, Strategy } from "../Problem";
const title: string = "Sum of digits, experience 13";
const description: string = "\n\nThere are 16 positive integers that do not have a zero in their digits and that have a digital sum equal to 5, namely: \n5, 14, 23, 32, 41, 113, 122, 131, 212, 221, 311, 1112, 1121, 1211, 2111 and 11111.\nTheir sum is 17891.\n\n\nLet f(n) be the sum of all positive integers that do not have a zero in their digits and have a digital sum equal to n.\n\n\nFind $\\displaystyle \\sum_{i=1}^{17} f(13^i)$.\nGive the last 9 digits as your answer.\n\n\n";
const index: number = 377;
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
