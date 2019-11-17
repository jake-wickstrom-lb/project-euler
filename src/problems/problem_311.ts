import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Biclinic Integral Quadrilaterals";
const description: string = "\nABCD is a convex, integer sided quadrilateral with 1 \u2264 AB < BC < CD < AD.\nBD has integer length. O is the midpoint of BD. AO has integer length.\nWe'll call ABCD a biclinic integral quadrilateral if AO = CO \u2264 BO = DO.\n\nFor example, the following quadrilateral is a biclinic integral quadrilateral:\nAB = 19, BC = 29, CD = 37, AD = 43, BD = 48 and AO = CO = 23.\n\n\n\n\nLet B(N) be the number of distinct biclinic integral quadrilaterals ABCD that satisfy AB2+BC2+CD2+AD2 \u2264 N.\nWe can verify that B(10 000) = 49 and B(1 000 000) = 38239.\n\n\nFind B(10 000 000 000).\n\n\n";
const index: number = 311;
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
