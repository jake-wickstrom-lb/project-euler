import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Colouring a Loop";
const description: string = "\nA certain type of flexible tile comes in three different sizes - 1\u00D71, 1\u00D72, and 1\u00D73 - and in $k$ different colours. There is an unlimited number of tiles available in each combination of size and colour.\n\nThese are used to tile a closed loop of width $2$ and length (circumference) $n$, where $n$ is a positive integer, subject to the following conditions:\n\nThe loop must be fully covered by non-overlapping tiles.\nIt is not permitted for four tiles to have their corners meeting at a single point.\nAdjacent tiles must be of different colours.\n\n\nFor example, the following is an acceptable tiling of a $2\\times 23$ loop with $k=4$ (blue, green, red and yellow):\n\n\n\n\n\nbut the following is not an acceptable tiling, because it violates the \"no four corners meeting at a point\" rule:\n\n\n\n\n\nLet $F_k(n)$ be the number of ways the $2\\times n$ loop can be tiled subject to these rules when $k$ colours are available. (Not all $k$ colours have to be used.) Where reflecting horizontally or vertically would give a different tiling, these tilings are to be counted separately.\n\nFor example, $F_4(3) = 104$, $F_5(7) = 3327300$, and $F_6(101)\\equiv 75309980 \\pmod{1\\,000\\,004\\,321}$.\nFind $F_{10}(10\\,004\\,003\\,002\\,001) \\bmod 1\\,000\\,004\\,321$.\n\n";
const index: number = 671;
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
