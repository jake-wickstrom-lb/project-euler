import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "GCD sequence";
const description: string = "\nLet g(n) be a sequence defined as follows:\ng(4) = 13,\ng(n) = g(n-1) + gcd(n, g(n-1)) for n > 4.\n\nThe first few values are:\n\n    n4567891011121314151617181920...\n    g(n)1314161718272829303132333451545560...\n    \n\nYou are given that g(1\u00A0000) = 2524 and g(1\u00A0000\u00A0000) = 2624152.\n\nFind g(1015).\n";
const index: number = 443;
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
