import { Problem, Strategy } from "../Problem";
const title: string = "Amicable chains";
const description: string = "\nThe proper divisors of a number are all the divisors excluding the number itself. For example, the proper divisors of 28 are 1, 2, 4, 7, and 14. As the sum of these divisors is equal to 28, we call it a perfect number.\nInterestingly the sum of the proper divisors of 220 is 284 and the sum of the proper divisors of 284 is 220, forming a chain of two numbers. For this reason, 220 and 284 are called an amicable pair.\nPerhaps less well known are longer chains. For example, starting with 12496, we form a chain of five numbers:\n12496 \u2192 14288 \u2192 15472 \u2192 14536 \u2192 14264 (\u2192 12496 \u2192 ...)\nSince this chain returns to its starting point, it is called an amicable chain.\nFind the smallest member of the longest amicable chain with no element exceeding one million.\n\n";
const index: number = 95;
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
