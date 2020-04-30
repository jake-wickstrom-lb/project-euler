import { Problem, Strategy } from "../Problem";
const title: string = "Spherical triangles";
const description: string = "\nA spherical triangle is a figure formed on the surface of a sphere by three great circular arcs intersecting pairwise in three vertices.\n\n\n\n\nLet C(r) be the sphere with the centre (0,0,0) and radius r.\nLet Z(r) be the set of points on the surface of C(r) with integer coordinates.\nLet T(r) be the set of spherical triangles with vertices in Z(r).\nDegenerate spherical triangles, formed by three points on the same great arc, are not included in T(r).\nLet A(r) be the area of the smallest spherical triangle in T(r).\n\nFor example A(14) is 3.294040 rounded to six decimal places.\n\nFind $\\sum \\limits_{r = 1}^{50} {A(r)}$. Give your answer rounded to six decimal places.\n\n";
const index: number = 332;
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
