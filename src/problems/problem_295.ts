import { Problem, Strategy } from "../Problem";
const title: string = "Lenticular holes";
const description: string = "\nWe call the convex area enclosed by two circles a lenticular hole if:\nThe centres of both circles are on lattice points.\nThe two circles intersect at two distinct lattice points.\nThe interior of the convex area enclosed by both circles does not contain any lattice points.\n\nConsider the circles:\nC0: x2+y2=25\nC1: (x+4)2+(y-4)2=1\nC2: (x-12)2+(y-4)2=65\n\n\nThe circles C0, C1 and C2 are drawn in the picture below.\n\n\nC0 and C1 form a lenticular hole, as well as C0 and C2.\n\nWe call an ordered pair of positive real numbers (r1, r2) a lenticular pair if there exist two circles with radii r1 and r2 that form a lenticular hole.\nWe can verify that (1, 5) and (5, \u221A65) are the lenticular pairs of the example above.\n\nLet L(N) be the number of distinct lenticular pairs (r1, r2) for which 0 < r1 \u2264 r2 \u2264 N.\nWe can verify that L(10) = 30 and L(100) = 3442.\n\nFind L(100 000).\n\n\n\n\n\n\n\n\n\n\n\n\n\n";
const index: number = 295;
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
