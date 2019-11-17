import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Cutting Squares";
const description: string = "\nA square piece of paper with integer dimensions N\u00D7N is placed with a corner at the origin and two of its sides along the x- and y-axes. Then, we cut it up respecting the following rules:\nWe only make straight cuts between two points lying on different sides of the square, and having integer coordinates.\nTwo cuts cannot cross, but several cuts can meet at the same border point.\nProceed until no more legal cuts can be made.\nCounting any reflections or rotations as distinct, we call C(N) the number of ways to cut an N\u00D7N square. For example, C(1)\u2009=\u20092 and C(2)\u2009=\u200930 (shown below).\n\n\nWhat is C(30) mod 108 ?\n";
const index: number = 270;
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
