import { Problem, Strategy } from "../Problem";
const title: string = "Circular primes";
const description: string = "\n\nThe number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.\nThere are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.\nHow many circular primes are there below one million?\n\n";
const index: number = 35;
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
