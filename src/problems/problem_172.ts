import { Problem, Strategy } from "../Problem";
const title: string = "Investigating numbers with few repeated digits";
const description: string = "\nHow many 18-digit numbers n (without leading zeros) are there such that no digit occurs more than three times in n?\n";
const index: number = 172;
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
