import { Problem, Strategy } from "../Problem";
const title: string = "Find the largest 0 to 9 pandigital that can be formed by concatenating products";
const description: string = "\nTake the number 6 and multiply it by each of 1273 and 9854:\n\n6 \u00D7 1273 =  7638\n6 \u00D7 9854 = 59124\n\nBy concatenating these products we get the 1 to 9 pandigital 763859124. We will call 763859124 the \"concatenated product of 6 and (1273,9854)\". Notice too, that the concatenation of the input numbers, 612739854, is also 1 to 9 pandigital.\n\nThe same can be done for 0 to 9 pandigital numbers.\n\nWhat is the largest 0 to 9 pandigital 10-digit concatenated product of an integer with two or more other integers, such that the concatenation of the input numbers is also a 0 to 9 pandigital 10-digit number?\n";
const index: number = 170;
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
