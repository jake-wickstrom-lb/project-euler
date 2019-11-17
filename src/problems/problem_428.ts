import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Necklace of circles";
const description: string = "\nLet a, b and c be positive numbers.\nLet W, X, Y, Z be four collinear points where |WX| = a, |XY| = b, |YZ| = c and |WZ| = a + b + c.\nLet Cin be the circle having the diameter XY.\nLet Cout be the circle having the diameter WZ.\n\n\nThe triplet (a, b, c) is called a necklace triplet if you can place k \u2265 3 distinct circles C1, C2, ..., Ck such that:\nCi has no common interior points with any Cj for 1 \u2264 i, j \u2264 k and i \u2260 j,\nCi is tangent to both Cin and Cout for 1 \u2264 i \u2264 k,\nCi is tangent to Ci+1 for 1 \u2264 i < k, and\nCk is tangent to C1.\n\nFor example, (5, 5, 5) and (4, 3, 21) are necklace triplets, while it can be shown that (2, 2, 5) is not.\n\n\n\n\nLet T(n) be the number of necklace triplets (a, b, c) such that a, b and c are positive integers, and b \u2264 n.\nFor example, T(1)\u00A0=\u00A09, T(20)\u00A0=\u00A0732 and T(3000)\u00A0=\u00A0438106.\n\n\nFind T(1\u00A0000\u00A0000\u00A0000).\n\n";
const index: number = 428;
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
