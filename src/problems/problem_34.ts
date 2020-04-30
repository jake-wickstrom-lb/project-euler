import { Problem, Strategy } from "../Problem";
const title: string = "Digit factorials";
const description: string = "\n\n145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.\nFind the sum of all numbers which are equal to the sum of the factorial of their digits.\nNote: as 1! = 1 and 2! = 2 are not sums they are not included.\n\n";
const index: number = 34;
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
