import { Problem, Strategy } from "../Problem";
const title: string = "Integer angled Quadrilaterals";
const description: string = "\nLet ABCD be a convex quadrilateral, with diagonals AC and BD. At each vertex the diagonal makes an angle with each of the two sides, creating eight corner angles.\n\nFor example, at vertex A, the two angles are CAD, CAB.\nWe call such a quadrilateral for which all eight corner angles have integer values when measured in degrees an \"integer angled quadrilateral\". An example of an integer angled quadrilateral is a square, where all eight corner angles are 45\u00B0. Another example is given by DAC = 20\u00B0, BAC = 60\u00B0, ABD = 50\u00B0, CBD = 30\u00B0, BCA = 40\u00B0, DCA = 30\u00B0, CDB = 80\u00B0, ADB = 50\u00B0.\nWhat is the total number of non-similar integer angled quadrilaterals?\nNote: In your calculations you may assume that a calculated angle is integral if it is within a tolerance of 10-9 of an integer value.\n";
const index: number = 177;
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
