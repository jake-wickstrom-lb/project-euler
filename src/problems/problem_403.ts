import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Lattice points enclosed by parabola and line";
const description: string = "\n\nFor integers a and b, we define D(a, b) as the domain enclosed by the parabola y = x2 and the line y = a\u00B7x + b:D(a, b) = { (x, y) | x2 \u2264 y \u2264 a\u00B7x + b }.\n\n\nL(a, b) is defined as the number of lattice points contained in D(a, b).\nFor example, L(1, 2) = 8 and L(2, -1) = 1.\n\n\nWe also define S(N) as the sum of L(a, b) for all the pairs (a, b) such that the area of D(a, b) is a rational number and |a|,|b| \u2264 N.\nWe can verify that S(5) = 344 and S(100) = 26709528.\n\n\nFind S(1012). Give your answer mod 108.\n\n";
const index: number = 403;
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
