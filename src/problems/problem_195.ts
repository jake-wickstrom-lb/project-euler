import { Problem, Strategy } from "../Problem";
const title: string = "Inscribed circles of triangles with one angle of 60 degrees";
const description: string = "\nLet's call an integer sided triangle with exactly one angle of 60 degrees a 60-degree triangle.\nLet r be the radius of the inscribed circle of such a 60-degree triangle.\nThere are 1234 60-degree triangles for which r \u2264 100.\nLet T(n) be the number of 60-degree triangles for which r \u2264 n, so\n T(100) = 1234,\u00A0 T(1000) = 22767, and\u00A0 T(10000) = 359912.\n\nFind T(1053779).\n\n";
const index: number = 195;
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
