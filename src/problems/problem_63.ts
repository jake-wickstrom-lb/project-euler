import { Problem, Strategy } from "../Problem";
const title: string = "Powerful digit counts";
const description: string = "\n\nThe 5-digit number, 16807=75, is also a fifth power. Similarly, the 9-digit number, 134217728=89, is a ninth power.\nHow many n-digit positive integers exist which are also an nth power?\n\n";
const index: number = 63;
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
