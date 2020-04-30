import { Problem, Strategy } from "../Problem";
const title: string = "Pandigital products";
const description: string = "\nWe shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.\n\nThe product 7254 is unusual, as the identity, 39 \u00D7 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.\n\nFind the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.\n\nHINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.\n\n";
const index: number = 32;
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
