import { Problem, Strategy } from "../Problem";
const title: string = "Prime summations";
const description: string = "\n\nIt is possible to write ten as the sum of primes in exactly five different ways:\n7 + 3\n5 + 5\n5 + 3 + 2\n3 + 3 + 2 + 2\n2 + 2 + 2 + 2 + 2\nWhat is the first value which can be written as the sum of primes in over five thousand different ways?\n\n";
const index: number = 77;
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
