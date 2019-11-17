import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Mountain Range";
const description: string = "\nThe following equation represents the continuous topography of a mountainous region, giving the elevation h at any point (x,y):\n\n\n\n\nA mosquito intends to fly from A(200,200) to B(1400,1400), without leaving the area given by 0\u00A0\u2264\u00A0x,\u00A0y\u00A0\u2264\u00A01600.\n\nBecause of the intervening mountains, it first rises straight up to a point A', having elevation f. Then, while remaining at the same elevation f, it flies around any obstacles until it arrives at a point B' directly above B.\n\nFirst, determine fmin which is the minimum constant elevation allowing such a trip from A to B, while remaining in the specified area.\nThen, find the length of the shortest path between A' and B', while flying at that constant elevation fmin.\n\nGive that length as your answer, rounded to three decimal places.\n\nNote: For convenience, the elevation function shown above is repeated below, in a form suitable for most programming languages:\nh=( 5000-0.005*(x*x+y*y+x*y)+12.5*(x+y) ) * exp( -abs(0.000001*(x*x+y*y)-0.0015*(x+y)+0.7) )\n\n";
const index: number = 262;
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
