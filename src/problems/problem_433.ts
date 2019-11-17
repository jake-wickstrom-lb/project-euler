import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Steps in Euclid's algorithm";
const description: string = "\n\nLet E(x0, y0) be the number of steps it takes to determine the greatest common divisor of x0 and y0 with Euclid's algorithm. More formally:x1 = y0, y1 = x0 mod y0xn = yn-1, yn = xn-1 mod yn-1\nE(x0, y0) is the smallest n such that yn = 0.\n\n\nWe have E(1,1) = 1, E(10,6) = 3 and E(6,10) = 4.\n\n\nDefine S(N) as the sum of E(x,y) for 1 \u2264 x,y \u2264 N.\nWe have S(1) = 1, S(10) = 221 and S(100) = 39826.\n\n\nFind S(5\u00B7106).\n\n\n\n";
const index: number = 433;
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
