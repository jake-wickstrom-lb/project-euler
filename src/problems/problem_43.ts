import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Sub-string divisibility";
const description: string = "\nThe number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.\nLet d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:\nd2d3d4=406 is divisible by 2\nd3d4d5=063 is divisible by 3\nd4d5d6=635 is divisible by 5\nd5d6d7=357 is divisible by 7\nd6d7d8=572 is divisible by 11\nd7d8d9=728 is divisible by 13\nd8d9d10=289 is divisible by 17\nFind the sum of all 0 to 9 pandigital numbers with this property.\n\n";
const index: number = 43;
class Solution extends Strategy {
    public validateArgs(args: any[]) {
        throw new Error("Method not implemented.");
    }
    public solve(args: any[]) {
        throw new Error("Method not implemented.");
    }
}
const solution = new Solution();
const ProblemImplementation = new Problem(title, description, solution);
ProblemManager.register(index, ProblemImplementation);
