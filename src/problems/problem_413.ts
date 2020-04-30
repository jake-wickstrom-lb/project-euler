import { Problem, Strategy } from "../Problem";
const title: string = "One-child Numbers";
const description: string = "\nWe say that a d-digit positive number (no leading zeros) is a one-child number if exactly one of its sub-strings is divisible by d.\n\nFor example, 5671 is a 4-digit one-child number. Among all its sub-strings 5, 6, 7, 1, 56, 67, 71, 567, 671 and 5671, only 56 is divisible by 4.\nSimilarly, 104 is a 3-digit one-child number because only 0 is divisible by 3.\n1132451 is a 7-digit one-child number because only 245 is divisible by 7.\n\nLet F(N) be the number of the one-child numbers less than N.\nWe can verify that F(10) = 9, F(103) = 389 and F(107) = 277674.\n\nFind F(1019).\n";
const index: number = 413;
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
