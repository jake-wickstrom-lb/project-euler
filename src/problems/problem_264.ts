import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Triangle Centres";
const description: string = "\nConsider all the triangles having:\nAll their vertices on lattice points.\nCircumcentre at the origin O.\nOrthocentre at the point H(5, 0).\nThere are nine such triangles having a perimeter \u2264 50.\nListed and shown in ascending order of their perimeter, they are:\n\nA(-4, 3), B(5, 0), C(4, -3)\nA(4, 3), B(5, 0), C(-4, -3)\nA(-3, 4), B(5, 0), C(3, -4)\nA(3, 4), B(5, 0), C(-3, -4)\nA(0, 5), B(5, 0), C(0, -5)\nA(1, 8), B(8, -1), C(-4, -7)\nA(8, 1), B(1, -8), C(-4, 7)\nA(2, 9), B(9, -2), C(-6, -7)\nA(9, 2), B(2, -9), C(-6, 7)\n\nThe sum of their perimeters, rounded to four decimal places, is 291.0089.\n\nFind all such triangles with a perimeter \u2264 105.\nEnter as your answer the sum of their perimeters rounded to four decimal places.\n\n";
const index: number = 264;
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
