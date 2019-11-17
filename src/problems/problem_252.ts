import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Convex Holes";
const description: string = "\n\nGiven a set of points on a plane, we define a convex hole to be a convex polygon having as vertices any of the given points and not containing any of the given points in its interior (in addition to the vertices, other given points may lie on the perimeter of the polygon). \n\n\nAs an example, the image below shows a set of twenty points and a few such convex holes. \nThe convex hole shown as a red heptagon has an area equal to 1049694.5 square units, which is the highest possible area for a convex hole on the given set of points.\n\n\n\n\nFor our example, we used the first 20 points (T2k\u22121,\u2009T2k), for k\u2009=\u20091,2,\u2026,20, produced with the pseudo-random number generator:\n\nS0\n    =\u00A0\n    290797\u00A0\n  Sn+1\n    =\u00A0\n    Sn2 mod 50515093\n  Tn\n    =\u00A0\n    (\u2009Sn mod 2000\u2009) \u2212 1000\u00A0\n  \n\n\ni.e. (527,\u2009144), (\u2212488,\u2009732), (\u2212454,\u2009\u2212947), \u2026\n\n\nWhat is the maximum area for a convex hole on the set containing the first 500 points in the pseudo-random sequence? Specify your answer including one digit after the decimal point.\n\n\n\n\n\n\n";
const index: number = 252;
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
