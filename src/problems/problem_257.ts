import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Angular Bisectors";
const description: string = "\n\nGiven is an integer sided triangle ABC with sides a \u2264 b \u2264 c. \n(AB = c, BC = a and AC = b).\nThe angular bisectors of the triangle intersect the sides at points E, F and G (see picture below).\n\n\n\n\nThe segments EF, EG and FG partition the triangle ABC into four smaller triangles: AEG, BFE, CGF and EFG.\nIt can be proven that for each of these four triangles the ratio area(ABC)/area(subtriangle) is rational.\nHowever, there exist triangles for which some or all of these ratios are integral.\n\n\nHow many triangles ABC with perimeter\u2264100,000,000 exist so that the ratio area(ABC)/area(AEG) is integral?\n\n\n\n\n\n\n";
const index: number = 257;
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
