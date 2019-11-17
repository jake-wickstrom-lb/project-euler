import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Circumscribed Circles";
const description: string = "\n\nEvery triangle has a circumscribed circle that goes through the three vertices.\nConsider all integer sided triangles for which the radius of the circumscribed circle is integral as well.\n\n\nLet S(n) be the sum of the radii of the circumscribed circles of all such triangles for which the radius does not exceed n.\n\nS(100)=4950 and S(1200)=1653605.\n\n\nFind S(107).\n\n\n";
const index: number = 373;
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
