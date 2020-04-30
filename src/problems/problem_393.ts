import { Problem, Strategy } from "../Problem";
const title: string = "Migrating ants";
const description: string = "\n\nAn  n\u00D7n grid of squares contains  n2 ants, one ant per square.\nAll ants decide to move simultaneously to an adjacent square (usually 4 possibilities, except for ants on the edge of the grid or at the corners).\nWe define f(n) to be the number of ways this can happen without any ants ending on the same square and without any two ants crossing the same edge between two squares.\n\n\nYou are given that f(4) = 88.\nFind  f(10).\n\n\n";
const index: number = 393;
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
