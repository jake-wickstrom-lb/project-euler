import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Sum square difference";
const description: string = "\nThe sum of the squares of the first ten natural numbers is,\n12 + 22 + ... + 102 = 385\nThe square of the sum of the first ten natural numbers is,\n(1 + 2 + ... + 10)2 = 552 = 3025\nHence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 \u2212 385 = 2640.\nFind the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.\n\n";
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
const ProblemImplementation = new Problem(title, description, solution);
ProblemManager.register(index, ProblemImplementation);
