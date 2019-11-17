import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Ellipses inside triangles";
const description: string = "\n\nFor any triangle T in the plane, it can be shown that there is a unique ellipse with largest area that is completely inside T.\n\n\n\nFor a given n, consider triangles T such that:\n- the vertices of T have integer coordinates with absolute value \u2264 n, and \n- the foci1 of the largest-area ellipse inside T are (\u221A13,0) and (-\u221A13,0).\nLet A(n) be the sum of the areas of all such triangles.\n\n\nFor example, if n = 8, there are two such triangles. Their vertices are (-4,-3),(-4,3),(8,0) and (4,3),(4,-3),(-8,0), and the area of each triangle is 36. Thus A(8) = 36 + 36 = 72.\n\n\nIt can be verified that A(10) = 252, A(100) = 34632 and A(1000) = 3529008.\n\n\nFind A(1 000 000 000).\n\n\n\n1The foci (plural of focus) of an ellipse are two points A and B such that for every point P on the boundary of the ellipse, AP + PB is constant.\n\n\n\n\n\n\n";
const index: number = 385;
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
