import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Sequence of points on a hyperbola";
const description: string = "\nLet H be the hyperbola defined by the equation 12x2 + 7xy - 12y2 = 625.\n\nNext, define X as the point (7, 1). It can be seen that X is in H.\n\nNow we define a sequence of points in H, {Pi : i \u2265 1}, as:\n P1 = (13, 61/4).\n P2 = (-43/6, -4).\n For i > 2, Pi is the unique point in H that is different from Pi-1 and such that line PiPi-1 is parallel to line Pi-2X. It can be shown that Pi is well-defined, and that its coordinates are always rational.\n\n\nYou are given that P3  = (-19/2, -229/24), P4 = (1267/144, -37/12) and P7 = (17194218091/143327232, 274748766781/1719926784).\n\nFind Pn for n = 1114 in the following format:If Pn = (a/b, c/d) where the fractions are in lowest terms and the denominators are positive, then the answer is (a + b + c + d) mod 1\u00A0000\u00A0000\u00A0007.\n\nFor n = 7, the answer would have been: 806236837.\n";
const index: number = 422;
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
