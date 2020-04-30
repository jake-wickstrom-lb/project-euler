import { Problem, Strategy } from "../Problem";
const title: string = "Obtuse Angled Triangles";
const description: string = "\nConsider the set S(r) of points (x,y) with integer coordinates satisfying |x| + |y| \u2264 r. \nLet O be the point (0,0) and C the point (r/4,r/4). \nLet N(r) be the number of points B in S(r), so that the triangle OBC has an obtuse angle, i.e. the largest angle \u03B1 satisfies 90\u00B0<\u03B1<180\u00B0.\nSo, for example, N(4)=24 and N(8)=100.\n\nWhat is N(1,000,000,000)?\n\n\n\n\n";
const index: number = 210;
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
