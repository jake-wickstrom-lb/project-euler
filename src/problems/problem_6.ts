import { Problem, Strategy } from "../Problem";
const title: string = "Sum square difference";
const description: string = "\nThe sum of the squares of the first ten natural numbers is,\n$$1^2 + 2^2 + ... + 10^2 = 385$$\nThe square of the sum of the first ten natural numbers is,\n$$(1 + 2 + ... + 10)^2 = 55^2 = 3025$$\nHence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is $3025 - 385 = 2640$.\nFind the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.\n";
const index: number = 6;
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
