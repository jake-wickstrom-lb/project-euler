import { Problem, Strategy } from "../Problem";
const title: string = "Integer sided triangles for which the  area/perimeter ratio is integral";
const description: string = "\n\nConsider the triangle with sides 6, 8 and 10. It can be seen that the perimeter and the area are both equal to 24. \nSo the area/perimeter ratio is equal to 1.\nConsider also the triangle with sides 13, 14 and 15. The perimeter equals 42 while the area is equal to 84. \nSo for this triangle the area/perimeter ratio is equal to 2.\n\n\nFind the sum of the perimeters of all integer sided triangles for which the area/perimeter ratios are equal to positive integers not exceeding 1000.\n\n\n";
const index: number = 283;
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
