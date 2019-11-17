import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Colouring a Strip";
const description: string = "\nA certain type of tile comes in three different sizes - 1\u00D71, 1\u00D72, and 1\u00D73 - and in four different colours: blue, green, red and yellow. There is an unlimited number of tiles available in each combination of size and colour.\n\nThese are used to tile a $2\\times n$ rectangle, where $n$ is a positive integer, subject to the following conditions:\n\nThe rectangle must be fully covered by non-overlapping tiles.\nIt is not permitted for four tiles to have their corners meeting at a single point.\nAdjacent tiles must be of different colours.\n\n\nFor example, the following is an acceptable tiling of a $2\\times 12$ rectangle:\n\n\n\n\n\nbut the following is not an acceptable tiling, because it violates the \"no four corners meeting at a point\" rule:\n\n\n\n\n\nLet $F(n)$ be the number of ways the $2\\times n$ rectangle can be tiled subject to these rules. Where reflecting horizontally or vertically would give a different tiling, these tilings are to be counted separately.\n\nFor example, $F(2) = 120$, $F(5) = 45876$, and $F(100)\\equiv 53275818 \\pmod{1\\,000\\,004\\,321}$.\nFind $F(10^{16}) \\bmod 1\\,000\\,004\\,321$.\n\n\n";
const index: number = 670;
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
