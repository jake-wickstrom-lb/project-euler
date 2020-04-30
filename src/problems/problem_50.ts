import { Problem, Strategy } from "../Problem";
const title: string = "Consecutive prime sum";
const description: string = "\nThe prime 41, can be written as the sum of six consecutive primes:\n41 = 2 + 3 + 5 + 7 + 11 + 13\nThis is the longest sum of consecutive primes that adds to a prime below one-hundred.\nThe longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.\nWhich prime, below one-million, can be written as the sum of the most consecutive primes?\n";
const index: number = 50;
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
