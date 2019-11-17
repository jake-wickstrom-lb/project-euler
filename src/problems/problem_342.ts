import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "The totient of a square is a cube";
const description: string = "\n\nConsider the number 50.\n502 = 2500 = 22 \u00D7 54, so \u03C6(2500) = 2 \u00D7 4 \u00D7 53 = 8 \u00D7 53 = 23 \u00D7 53. 1\nSo 2500 is a square and  \u03C6(2500) is a cube.\n\n\nFind the sum of all numbers n, 1 < n < 1010 such that \u03C6(n2) is a cube.\n\n\n1 \u03C6 denotes Euler's totient function.\n\n\n\n\n";
const index: number = 342;
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
