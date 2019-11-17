import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Numbers in decimal expansions";
const description: string = "\nLet p = p1 p2 p3 ... be an infinite sequence of random digits, selected from {0,1,2,3,4,5,6,7,8,9} with equal probability.\nIt can be seen that p corresponds to the real number 0.p1 p2 p3 .... \nIt can also be seen that choosing a random real number from the interval [0,1) is equivalent to choosing an infinite sequence of random digits selected from {0,1,2,3,4,5,6,7,8,9} with equal probability.\n\nFor any positive integer n with d decimal digits, let k be the smallest index such that pk, pk+1, ...pk+d-1 are the decimal digits of n, in the same order.\nAlso, let g(n) be the expected value of k; it can be proven that g(n) is always finite and, interestingly, always an integer number.\n\nFor example, if n = 535, then\nfor p = 31415926535897...., we get k = 9\nfor p = 355287143650049560000490848764084685354..., we get k = 36\netc and we find that g(535) = 1008.\n\nGiven that $\\sum \\limits_{n = 2}^{999} {g \\left ( \\left \\lfloor \\dfrac{10^6}{n} \\right \\rfloor \\right )} = 27280188$, find $\\sum \\limits_{n = 2}^{999999} {g \\left ( \\left \\lfloor \\dfrac{10^{16}}{n} \\right \\rfloor \\right )}$.\n\nNote: $\\lfloor x \\rfloor$ represents the floor function.\n";
const index: number = 316;
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
