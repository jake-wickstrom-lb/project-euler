import { Problem, Strategy } from "../Problem";
const title: string = "Permuted multiples";
const description: string = "\n\nIt can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.\nFind the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.\n\n";
const index: number = 52;
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
