import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Triangular, pentagonal, and hexagonal";
const description: string = "\nTriangle, pentagonal, and hexagonal numbers are generated by the following formulae:\nTriangle\n\u00A0\nTn=n(n+1)/2\n\u00A0\n1, 3, 6, 10, 15, ...\nPentagonal\n\u00A0\nPn=n(3n\u22121)/2\n\u00A0\n1, 5, 12, 22, 35, ...\nHexagonal\n\u00A0\nHn=n(2n\u22121)\n\u00A0\n1, 6, 15, 28, 45, ...\nIt can be verified that T285 = P165 = H143 = 40755.\nFind the next triangle number that is also pentagonal and hexagonal.\n\n";
const index: number = 45;
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