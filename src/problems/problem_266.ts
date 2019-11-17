import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Pseudo Square Root";
const description: string = "\n\nThe divisors of 12 are: 1,2,3,4,6 and 12.\nThe largest divisor of 12 that does not exceed the square root of 12 is 3.\nWe shall call the largest divisor of an integer n that does not exceed the square root of n the pseudo square root (PSR) of n.\nIt can be seen that PSR(3102)=47.\n\n\nLet p be the product of the primes below 190.\nFind PSR(p) mod 1016.\n\n\n\n\n\n";
const index: number = 266;
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
