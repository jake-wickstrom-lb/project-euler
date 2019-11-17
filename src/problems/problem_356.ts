import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Largest roots of cubic polynomials";
const description: string = "\n\nLet an be the largest real root of a polynomial g(x) = x3 - 2n\u00B7x2 + n.\nFor example, a2 = 3.86619826...\n\n\nFind the last eight digits of $\\sum \\limits_{i = 1}^{30} {\\left \\lfloor a_i^{987654321} \\right \\rfloor}$.\n\n\nNote: $\\lfloor a \\rfloor$ represents the floor function.\n\n";
const index: number = 356;
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
