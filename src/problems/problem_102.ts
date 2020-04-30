import { Problem, Strategy } from "../Problem";
const title: string = "Triangle containment";
const description: string = "\nThree distinct points are plotted at random on a Cartesian plane, for which -1000 \u2264 x, y \u2264 1000, such that a triangle is formed.\nConsider the following two triangles:\nA(-340,495), B(-153,-910), C(835,-947)\nX(-175,41), Y(-421,-714), Z(574,-645)\nIt can be verified that triangle ABC contains the origin, whereas triangle XYZ does not.\nUsing triangles.txt (right click and 'Save Link/Target As...'), a 27K text file containing the co-ordinates of one thousand \"random\" triangles, find the number of triangles for which the interior contains the origin.\nNOTE: The first two examples in the file represent the triangles in the example given above.\n\n";
const index: number = 102;
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
