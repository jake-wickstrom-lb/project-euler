import { Problem, Strategy } from "../Problem";
const title: string = "Champernowne's constant";
const description: string = "\nAn irrational decimal fraction is created by concatenating the positive integers:\n0.123456789101112131415161718192021...\nIt can be seen that the 12th digit of the fractional part is 1.\nIf dn represents the nth digit of the fractional part, find the value of the following expression.\nd1 \u00D7 d10 \u00D7 d100 \u00D7 d1000 \u00D7 d10000 \u00D7 d100000 \u00D7 d1000000\n\n";
const index: number = 40;
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
