import { Problem, Strategy } from "../Problem";
const title: string = "Triangle Triples";
const description: string = "\n\n\nLet T(n) be the nth triangle number, so T(n) =\n\n\nn\u2009(n+1)2\n\n.\n\n\nLet dT(n) be the number of divisors of T(n).\nE.g.:\nT(7) = 28 and dT(7) = 6.\n\n\nLet Tr(n) be the number of triples (i, j, k) such that 1 \u2264 i < j < k \u2264 n and dT(i) > dT(j) > dT(k).\nTr(20) = 14, Tr(100) = 5772 and Tr(1000) = 11174776.\n\n\nFind Tr(60 000 000). \nGive the last 18 digits of your answer.\n\n\n";
const index: number = 378;
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
