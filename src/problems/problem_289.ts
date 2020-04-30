import { Problem, Strategy } from "../Problem";
const title: string = "Eulerian Cycles";
const description: string = "\nLet C(x,y) be a circle passing through the points (x,\u2009y), (x,\u2009y+1), (x+1,\u2009y) and (x+1,\u2009y+1).\n\nFor positive integers m and n, let E(m,n) be a configuration which consists of the m\u00B7n circles:\n{ C(x,y): 0\u2009\u2264\u2009x\u2009<\u2009m, 0\u2009\u2264\u2009y\u2009<\u2009n, x and y are integers }\n\nAn Eulerian cycle on E(m,n) is a closed path that passes through each arc exactly once.\nMany such paths are possible on E(m,n), but we are only interested in those which are not self-crossing: \nA non-crossing path just touches itself at lattice points, but it never crosses itself.\n\nThe image below shows E(3,3) and an example of an Eulerian non-crossing path.\n\nLet L(m,n) be the number of Eulerian non-crossing paths on E(m,n).\nFor example, L(1,2)\u2009=\u20092, L(2,2)\u2009=\u200937 and L(3,3)\u2009=\u2009104290.\n\nFind L(6,10) mod 1010.\n";
const index: number = 289;
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
