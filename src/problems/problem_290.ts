import { Problem, Strategy } from "../Problem";
const title: string = "Digital Signature";
const description: string = "\n\nHow many integers 0 \u2264 n < 1018 have the property that the sum of the digits of n equals the sum of digits of 137n?\n\n";
const index: number = 290;
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
