import { Problem, Strategy } from "../Problem";
const title: string = "Diophantine reciprocals II";
const description: string = "\nIn the following equation x, y, and n are positive integers.\n\n1x\n + \n1y\n = \n1n\n\nIt can be verified that when n = 1260 there are 113 distinct solutions and this is the least value of n for which the total number of distinct solutions exceeds one hundred.\nWhat is the least value of n for which the number of distinct solutions exceeds four million?\nNOTE: This problem is a much more difficult version of Problem 108 and as it is well beyond the limitations of a brute force approach it requires a clever implementation.\n";
const index: number = 110;
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
