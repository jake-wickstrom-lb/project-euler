import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "2x2 positive integer matrix";
const description: string = "\nA positive integer matrix is a matrix whose elements are all positive integers.\nSome positive integer matrices can be expressed as a square of a positive integer matrix in two different ways. Here is an example:\n\n$$\\begin{pmatrix}\n40 & 12\\\\\n48 & 40\n\\end{pmatrix} =\n\\begin{pmatrix}\n2 & 3\\\\\n12 & 2\n\\end{pmatrix}^2 =\n\\begin{pmatrix}\n6 & 1\\\\\n4 & 6\n\\end{pmatrix}^2\n$$\n\n\nWe define F(N) as the number of the 2x2 positive integer matrices which have a trace less than N and which can be expressed as a square of a positive integer matrix in two different ways.\nWe can verify that F(50) = 7 and F(1000) = 1019.\n\n\n\nFind F(107).\n\n";
const index: number = 420;
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
