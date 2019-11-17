import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Special Pythagorean triplet";
const description: string = "\nA Pythagorean triplet is a set of three natural numbers, a < b < c, for which,\n a2 + b2 = c2\nFor example, 32 + 42 = 9 + 16 = 25 = 52.\nThere exists exactly one Pythagorean triplet for which a + b + c = 1000.Find the product abc.\n\n";
const index: number = 9;
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
