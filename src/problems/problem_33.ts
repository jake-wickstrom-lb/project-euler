import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Digit cancelling fractions";
const description: string = "\nThe fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.\nWe shall consider fractions like, 30/50 = 3/5, to be trivial examples.\nThere are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.\nIf the product of these four fractions is given in its lowest common terms, find the value of the denominator.\n\n";
const index: number = 33;
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
