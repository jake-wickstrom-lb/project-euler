import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Distances in a bee's honeycomb ";
const description: string = "\nConsider a honey bee's honeycomb where each cell is a perfect regular hexagon with side length $1$.\n\n\n\n\n\n\nOne particular cell is occupied by the queen bee.\nFor a positive real number $L$, let $\\text{B}(L)$ count the cells with distance $L$ from the queen bee cell (all distances are measured from centre to centre); you may assume that the honeycomb is large enough to accommodate for any distance we wish to consider. \nFor example, $\\text{B}(\\sqrt 3)=6$, $\\text{B}(\\sqrt {21}) = 12$ and $\\text{B}(111\\,111\\,111) = 54$.\n\nFind the number of $L \\le 5 \\times 10^{11}$ such that $\\text{B}(L) = 450$.\n";
const index: number = 354;
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
