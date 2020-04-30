import { Problem, Strategy } from "../Problem";
const title: string = "Scary Sphere";
const description: string = "\n\nGiven two points (x1,y1,z1) and (x2,y2,z2) in three dimensional space, the Manhattan distance  between those points is defined as  |x1-x2|+|y1-y2|+|z1-z2|.\n\n\nLet C(r) be a sphere with radius r and center in the origin O(0,0,0).\nLet I(r) be the set of all points with integer coordinates on the surface of C(r).\nLet S(r) be the sum of the Manhattan distances of all elements of I(r) to the origin O.\n\n\nE.g. S(45)=34518.\n\n\nFind S(1010).\n\n\n\n\n";
const index: number = 360;
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
