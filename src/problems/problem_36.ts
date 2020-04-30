import { Problem, Strategy } from "../Problem";
const title: string = "Double-base palindromes";
const description: string = "\n\nThe decimal number, 585 = 10010010012 (binary), is palindromic in both bases.\nFind the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.\n(Please note that the palindromic number, in either base, may not include leading zeros.)\n\n";
const index: number = 36;
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
