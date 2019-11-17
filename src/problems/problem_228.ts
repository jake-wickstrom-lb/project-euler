import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Minkowski Sums";
const description: string = "\nLet Sn be the regular n-sided polygon \u2013 or shape \u2013 whose vertices \n\nvk (k\u2009=\u20091,2,\u2026,n) have coordinates:\n\n    xk\u00A0\u2009\u00A0= \u2009\n        cos( 2k-1/n \u00D7180\u00B0\u2009)\n  \n    yk\u00A0\u2009\u00A0= \u00A0\n        sin( 2k-1/n \u00D7180\u00B0\u2009)\n  Each Sn is to be interpreted as a filled shape consisting of all points on the perimeter and in the interior.\n\nThe Minkowski sum, S+T, of two shapes S and T is the result of \n\nadding every point in S to every point in T, where point addition is performed coordinate-wise: \n\n(u,\u2009v) + (x,\u2009y) = (u+x,\u2009v+y).\n\nFor example, the sum of S3 and S4 is the six-sided shape shown in pink below:\n\n\n\n\nHow many sides does S1864\u2009+\u2009S1865\u2009+\u2009\u2026\u2009+\u2009S1909 have?\n";
const index: number = 228;
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
