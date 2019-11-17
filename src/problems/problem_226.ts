import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "A Scoop of Blancmange";
const description: string = "\nThe blancmange curve is the set of points $(x, y)$ such that $0 \\le x \\le 1$ and $y = \\sum \\limits_{n = 0}^{\\infty} {\\dfrac{s(2^n x)}{2^n}}$, where $s(x)$ is the distance from $x$ to the nearest integer.\n\nThe area under the blancmange curve is equal to \u00BD, shown in pink in the diagram below.\n\n\n\n\nLet C be the circle with centre $\\left ( \\frac{1}{4}, \\frac{1}{2} \\right )$ and radius $\\frac{1}{4}$, shown in black in the diagram.\n\nWhat area under the blancmange curve is enclosed by C?Give your answer rounded to eight decimal places in the form 0.abcdefgh\n\n";
const index: number = 226;
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
