import { Problem, Strategy } from "../Problem";
const title: string = "B\u00E9zier Curves";
const description: string = "\nA cubic B\u00E9zier curve is defined by four points: P0, P1, P2 and P3.\n\n\n\nThe curve is constructed as follows:\nOn the segments P0P1, P1P2 and P2P3 the points Q0,Q1 and Q2 are drawn such that\nP0Q0 / P0P1 = P1Q1 / P1P2 = P2Q2 / P2P3 = t (t in [0,1]).\nOn the segments Q0Q1 and Q1Q2 the points R0 and R1 are drawn such that\nQ0R0  / Q0Q1 = Q1R1 / Q1Q2 = t for the same value of t.\nOn the segment R0R1 the point B is drawn such that R0B / R0R1 = t for the same value of t.\nThe B\u00E9zier curve defined by the points P0, P1, P2, P3 is the locus of B as Q0 takes all possible positions on the segment P0P1.\n(Please note that for all points the value of t is the same.)\n\nAt this (external) web address you will find an applet that allows you to drag the points P0, P1, P2 and P3 to see what the B\u00E9zier curve (green curve) defined by those points looks like. You can also drag the point Q0 along the segment P0P1.\n\nFrom the construction it is clear that the B\u00E9zier curve will be tangent to the segments P0P1 in P0 and P2P3 in P3.\n\nA cubic B\u00E9zier curve with P0=(1,0), P1=(1,v), P2=(v,1) and P3=(0,1) is used to approximate a quarter circle.\nThe value v > 0 is chosen such that the area enclosed by the lines OP0, OP3 and the curve is equal to \u03C0/4 (the area of the quarter circle).\n\nBy how many percent does the length of the curve differ from the length of the quarter circle?\nThat is, if L is the length of the curve, calculate  100 \u00D7 L \u2212 \u03C0/2\u03C0/2Give your answer rounded to 10 digits behind the decimal point.\n";
const index: number = 363;
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
