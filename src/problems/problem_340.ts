import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Crazy Function";
const description: string = "\n\nFor fixed integers a, b, c, define the crazy function F(n) as follows:\nF(n) = n - c for all n > b \nF(n) = F(a + F(a + F(a + F(a + n)))) for all n \u2264 b.\n\nAlso, define $S(a, b, c) = \\sum \\limits_{n = 0}^{b} {F(n)}$.\n\nFor example, if a = 50, b = 2000 and c = 40, then F(0) = 3240 and F(2000) = 2040.\nAlso, S(50, 2000, 40) = 5204240.\n\n\nFind the last 9 digits of S(217, 721, 127).\n\n\n\n\n\n\n";
const index: number = 340;
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
