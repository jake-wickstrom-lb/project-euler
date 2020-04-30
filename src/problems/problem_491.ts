import { Problem, Strategy } from "../Problem";
const title: string = "Double pandigital number divisible by 11";
const description: string = "\nWe call a positive integer double pandigital if it uses all the digits 0 to 9 exactly twice (with no leading zero). For example, 40561817703823564929 is one such number.\n\nHow many double pandigital numbers are divisible by 11?\n";
const index: number = 491;
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
