import { Problem, Strategy } from "../Problem";
const title: string = "Combined Volume of Cuboids";
const description: string = "\nAn axis-aligned cuboid, specified by parameters { (x0,y0,z0), (dx,dy,dz) }, consists of all points (X,Y,Z) such that x0 \u2264 X \u2264 x0+dx, y0 \u2264 Y \u2264 y0+dy and z0 \u2264 Z \u2264 z0+dz.  The volume of the cuboid is the product, dx \u00D7 dy \u00D7 dz.  The combined volume of a collection of cuboids is the volume of their union and will be less than the sum of the individual volumes if any cuboids overlap.\n\nLet C1,...,C50000 be a collection of 50000 axis-aligned cuboids such that Cn has parameters\n\nx0 = S6n-5 modulo 10000y0 = S6n-4 modulo 10000z0 = S6n-3 modulo 10000dx = 1 + (S6n-2 modulo 399)dy = 1 + (S6n-1 modulo 399)dz = 1 + (S6n modulo 399)\n\nwhere S1,...,S300000 come from the \"Lagged Fibonacci Generator\":\n\nFor 1 \u2264 k \u2264 55, Sk = [100003 - 200003k + 300007k3] \u00A0 (modulo 1000000)For 56 \u2264 k, Sk = [Sk-24 + Sk-55] \u00A0 (modulo 1000000)\n\nThus, C1 has parameters {(7,53,183),(94,369,56)}, C2 has parameters {(2383,3563,5079),(42,212,344)}, and so on.\n\nThe combined volume of the first 100 cuboids, C1,...,C100, is 723581599.\n\nWhat is the combined volume of all 50000 cuboids, C1,...,C50000 ?\n";
const index: number = 212;
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
