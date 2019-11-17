import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Investigating multiple reflections of a laser beam";
const description: string = "\nIn laser physics, a \"white cell\" is a mirror system that acts as a delay line for the laser beam. The beam enters the cell, bounces around on the mirrors, and eventually works its way back out.\nThe specific white cell we will be considering is an ellipse with the equation 4x2 + y2 = 100\nThe section corresponding to \u22120.01 \u2264 x \u2264 +0.01 at the top is missing, allowing the light to enter and exit through the hole.\n\nThe light beam in this problem starts at the point (0.0,10.1) just outside the white cell, and the beam first impacts the mirror at (1.4,-9.6).\nEach time the laser beam hits the surface of the ellipse, it follows the usual law of reflection \"angle of incidence equals angle of reflection.\" That is, both the incident and reflected beams make the same angle with the normal line at the point of incidence.\nIn the figure on the left, the red line shows the first two points of contact between the laser beam and the wall of the white cell; the blue line shows the line tangent to the ellipse at the point of incidence of the first bounce.The slope m of the tangent line at any point (x,y) of the given ellipse is: m = \u22124x/yThe normal line is perpendicular to this tangent line at the point of incidence.\nThe animation on the right shows the first 10 reflections of the beam.\n\nHow many times does the beam hit the internal surface of the white cell before exiting?\n";
const index: number = 144;
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
