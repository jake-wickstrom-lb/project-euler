import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Combinatoric selections";
const description: string = "\nThere are exactly ten ways of selecting three from five, 12345:\n123, 124, 125, 134, 135, 145, 234, 235, 245, and 345\nIn combinatorics, we use the notation, $\\displaystyle \\binom 5 3 = 10$.\nIn general, $\\displaystyle \\binom n r = \\dfrac{n!}{r!(n-r)!}$, where $r \\le n$, $n! = n \\times (n-1) \\times ... \\times 3 \\times 2 \\times 1$, and $0! = 1$.\n\nIt is not until $n = 23$, that a value exceeds one-million: $\\displaystyle \\binom {23} {10} = 1144066$.\nHow many, not necessarily distinct, values of $\\displaystyle \\binom n r$ for $1 \\le n \\le 100$, are greater than one-million?\n";
const index: number = 53;
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
