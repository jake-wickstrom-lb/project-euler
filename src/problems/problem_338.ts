import { Problem, Strategy } from "../Problem";
const title: string = "Cutting Rectangular Grid Paper";
const description: string = "\nA rectangular sheet of grid paper with integer dimensions w \u00D7 h is given. Its grid spacing is 1.\nWhen we cut the sheet along the grid lines into two pieces and rearrange those pieces without overlap, we can make new rectangles with different dimensions.\nFor example, from a sheet with dimensions 9 \u00D7 4 , we can make rectangles with dimensions 18 \u00D7 2, 12 \u00D7 3 and 6 \u00D7 6 by cutting and rearranging as below:\n\n\n\n\nSimilarly, from a sheet with dimensions 9 \u00D7 8 , we can make rectangles with dimensions 18 \u00D7 4 and 12 \u00D7 6 .\n\nFor a pair w and h, let F(w,h) be the number of distinct rectangles that can be made from a sheet with dimensions w \u00D7 h .\nFor example, F(2,1) = 0, F(2,2) = 1, F(9,4) = 3 and F(9,8) = 2. \nNote that rectangles congruent to the initial one are not counted in F(w,h).\nNote also that rectangles with dimensions w \u00D7 h and dimensions h \u00D7 w are not considered distinct.\n\nFor an integer N, let G(N) be the sum of F(w,h) for all pairs w and h which satisfy 0 < h \u2264 w \u2264 N.\nWe can verify that G(10) = 55, G(103) = 971745 and G(105) = 9992617687.\n\nFind G(1012). Give your answer modulo 108.\n";
const index: number = 338;
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
