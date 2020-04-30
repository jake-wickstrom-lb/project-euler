import { Problem, Strategy } from "../Problem";
const title: string = "Step Numbers";
const description: string = "\nConsider the number 45656. \nIt can be seen that each pair of consecutive digits of 45656 has a difference of one.\nA number for which every pair of consecutive digits has a difference of one is called a step number.\nA pandigital number  contains every decimal digit from 0 to 9 at least once.\n\nHow many pandigital step numbers less than 1040 are there?\n\n";
const index: number = 178;
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
