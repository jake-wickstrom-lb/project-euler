import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Squarefree Binomial Coefficients";
const description: string = "\nThe binomial coefficients $\\displaystyle \\binom n k$ can be arranged in triangular form, Pascal's triangle, like this:\n\n\n111121133114641151010511615201561172135352171\n.........\n\n\nIt can be seen that the first eight rows of Pascal's triangle contain twelve distinct numbers: 1,\u00A02,\u00A03,\u00A04,\u00A05,\u00A06,\u00A07,\u00A010,\u00A015,\u00A020,\u00A021\u00A0and\u00A035.\n\nA positive integer n is called squarefree if no square of a prime divides n.\nOf the twelve distinct numbers in the first eight rows of Pascal's triangle, all except 4 and 20 are squarefree.\nThe sum of the distinct squarefree numbers in the first eight rows is 105.\n\nFind the sum of the distinct squarefree numbers in the first 51 rows of Pascal's triangle.\n";
const index: number = 203;
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
