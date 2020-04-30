import { Problem, Strategy } from "../Problem";
const title: string = "Crisscross Ellipses";
const description: string = "\n\nEa is an ellipse with an equation of the form x2 + 4y2 = 4a2.\nEa' is the rotated image of Ea by \u03B8 degrees counterclockwise around the origin O(0, 0) for 0\u00B0 < \u03B8 < 90\u00B0.\n\n\n\n\n\n\nb is the distance to the origin of the two intersection points closest to the origin and c is the distance of the two other intersection points.\nWe call an ordered triplet (a, b, c) a canonical ellipsoidal triplet if a, b and c are positive integers.\nFor example, (209, 247, 286) is a canonical ellipsoidal triplet.\n\n\n\nLet C(N) be the number of distinct canonical ellipsoidal triplets (a, b, c) for a \u2264 N.\nIt can be verified that C(103) = 7, C(104) = 106 and C(106) = 11845.\n\n\n\nFind C(1017).\n\n";
const index: number = 404;
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
