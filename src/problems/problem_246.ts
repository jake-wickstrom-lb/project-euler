import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Tangents to an ellipse";
const description: string = "\n\nA definition for an ellipse is:\nGiven a circle c with centre M and radius r and a point G such that d(G,M)<r, the locus of the points that are equidistant from c and G form an ellipse.\n\nThe construction of the points of the ellipse is shown below.\n\n\n\n\n\nGiven are the points M(-2000,1500) and G(8000,1500). \nGiven is also the circle c with centre M and radius 15000.\nThe locus of the points that are equidistant from G and c form an ellipse e.\nFrom a point P outside e the two tangents t1 and t2 to the ellipse are drawn.\nLet the points where t1 and t2 touch the ellipse be R and S.\n\n\n\n\nFor how many lattice points P is angle RPS greater than 45 degrees?\n\n\n";
const index: number = 246;
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
