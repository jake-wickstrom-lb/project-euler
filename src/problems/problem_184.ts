import { Problem, Strategy } from "../Problem";
const title: string = "Triangles containing the origin";
const description: string = "\nConsider the set Ir of points (x,y) with integer co-ordinates in the interior of the circle with radius r, centered at the origin, i.e. x2 + y2 < r2.\nFor a radius of 2, I2 contains the nine points (0,0), (1,0), (1,1), (0,1), (-1,1), (-1,0), (-1,-1), (0,-1) and (1,-1). There are eight triangles having all three vertices in I2 which contain the origin in the interior. Two of them are shown below, the others are obtained from these by rotation.\n\n\nFor a radius of 3, there are 360 triangles containing the origin in the interior and having all vertices in I3 and for I5 the number is 10600.\n\nHow many triangles are there containing the origin in the interior and having all three vertices in I105?\n\n";
const index: number = 184;
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
