import { Problem, Strategy } from "../Problem";
const title: string = "Diophantine equation";
const description: string = "\nConsider quadratic Diophantine equations of the form:\nx2 \u2013 Dy2 = 1\nFor example, when D=13, the minimal solution in x is 6492 \u2013 13\u00D71802 = 1.\nIt can be assumed that there are no solutions in positive integers when D is square.\nBy finding minimal solutions in x for D = {2, 3, 5, 6, 7}, we obtain the following:\n32 \u2013 2\u00D722 = 1\n22 \u2013 3\u00D712 = 192 \u2013 5\u00D742 = 1\n52 \u2013 6\u00D722 = 1\n82 \u2013 7\u00D732 = 1\nHence, by considering minimal solutions in x for D \u2264 7, the largest x is obtained when D=5.\nFind the value of D \u2264 1000 in minimal solutions of x for which the largest value of x is obtained.\n\n";
const index: number = 66;
class Solution extends Strategy {
    public validateArgs(args: any[]) {
        throw new Error("Method not implemented.");
    }
    public solve(args: any[]) {
        throw new Error("Method not implemented.");
    }
}
const solution = new Solution();
export const ProblemImplementation = new Problem(index, title, description, solution);
