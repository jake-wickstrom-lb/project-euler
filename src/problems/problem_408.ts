import { Problem, Strategy } from "../Problem";
const title: string = "Admissible paths through a grid";
const description: string = "\nLet's call a lattice point (x, y) inadmissible if x, y and x\u00A0+\u00A0y are all positive perfect squares.\nFor example, (9, 16) is inadmissible, while (0, 4), (3, 1) and (9, 4) are not.\n\nConsider a path from point (x1, y1) to point (x2, y2) using only unit steps north or east.\nLet's call such a path admissible if none of its intermediate points are inadmissible.\n\nLet P(n) be the number of admissible paths from (0, 0) to (n, n).\nIt can be verified that P(5) = 252, P(16) = 596994440 and P(1000) mod 1\u00A0000\u00A0000\u00A0007 = 341920854.\n\nFind P(10\u00A0000\u00A0000) mod 1\u00A0000\u00A0000\u00A0007.\n";
const index: number = 408;
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
