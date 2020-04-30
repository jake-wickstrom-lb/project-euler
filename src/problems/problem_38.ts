import { Problem, Strategy } from "../Problem";
const title: string = "Pandigital multiples";
const description: string = "\nTake the number 192 and multiply it by each of 1, 2, and 3:\n192 \u00D7 1 = 192\n192 \u00D7 2 = 384\n192 \u00D7 3 = 576\nBy concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)\nThe same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).\nWhat is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?\n\n";
const index: number = 38;
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
