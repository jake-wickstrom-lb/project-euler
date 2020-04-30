import { Problem, Strategy } from "../Problem";
const title: string = "Numbers for which no three consecutive digits have a sum greater than a given value";
const description: string = "\nHow many 20 digit numbers n (without any leading zero) exist such that no three consecutive digits of n have a sum greater than 9?\n";
const index: number = 164;
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
