import { Problem, Strategy } from "../Problem";
const title: string = "Counting summations";
const description: string = "\n\nIt is possible to write five as a sum in exactly six different ways:\n4 + 1\n3 + 2\n3 + 1 + 1\n2 + 2 + 1\n2 + 1 + 1 + 1\n1 + 1 + 1 + 1 + 1\nHow many different ways can one hundred be written as a sum of at least two positive integers?\n\n";
const index: number = 76;
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
