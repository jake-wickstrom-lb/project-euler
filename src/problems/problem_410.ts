import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Circle and tangent line";
const description: string = "\nLet C be the circle with radius r, x2 + y2 = r2. We choose two points P(a, b) and Q(-a, c) so that the line passing through P and Q is tangent to C.\n\nFor example, the quadruplet (r, a, b, c) = (2, 6, 2, -7) satisfies this property.\n\nLet F(R, X) be the number of the integer quadruplets (r, a, b, c) with this property, and with 0 < r \u2264 R and 0 < a \u2264 X.\n\nWe can verify that F(1, 5) = 10, F(2, 10) = 52 and F(10, 100) = 3384.\nFind F(108, 109) + F(109, 108).\n";
const index: number = 410;
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
