import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Idempotents";
const description: string = "\n\nIf we calculate a2 mod 6 for 0 \u2264 a \u2264 5 we get: 0,1,4,3,4,1.\n\n\nThe largest value of a such that a2 \u2261 a mod 6 is 4.\nLet's call M(n) the largest value of a < n such that a2 \u2261 a (mod n).\nSo M(6) = 4.\n\n\nFind \u2211\u2009M(n) for 1 \u2264 n \u2264 107.\n\n\n";
const index: number = 407;
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
