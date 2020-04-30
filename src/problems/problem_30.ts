import { Problem, Strategy } from "../Problem";
const title: string = "Digit fifth powers";
const description: string = "\n\nSurprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:\n1634 = 14 + 64 + 34 + 44\n8208 = 84 + 24 + 04 + 84\n9474 = 94 + 44 + 74 + 44\nAs 1 = 14 is not a sum it is not included.\nThe sum of these numbers is 1634 + 8208 + 9474 = 19316.\nFind the sum of all the numbers that can be written as the sum of fifth powers of their digits.\n\n";
const index: number = 30;
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
