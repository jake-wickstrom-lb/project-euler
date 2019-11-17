import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Criss Cross";
const description: string = "\nA 4x4 grid is filled with digits d, 0 \u2264 d \u2264 9.\n\nIt can be seen that in the grid\n\n\n6 3 3 0\n5 0 4 3\n0 7 1 4\n1 2 4 5\n\nthe sum of each row and each column has the value 12. Moreover the sum of each diagonal is also 12.\n\nIn how many ways can you fill a 4x4 grid with the digits d, 0 \u2264 d \u2264 9 so that each row, each column, and both diagonals have the same sum?\n";
const index: number = 166;
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
