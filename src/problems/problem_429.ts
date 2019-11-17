import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Sum of squares of unitary divisors";
const description: string = "\n\nA unitary divisor d of a number n is a divisor of n that has the property gcd(d, n/d) = 1.\nThe unitary divisors of 4! = 24 are 1, 3, 8 and 24.\nThe sum of their squares is 12 + 32 + 82 + 242 = 650.\n\n\nLet S(n) represent the sum of the squares of the unitary divisors of n. Thus S(4!)=650.\n\n\nFind S(100 000 000!) modulo 1 000 000 009.\n\n";
const index: number = 429;
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
