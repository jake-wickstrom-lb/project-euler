import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Rational zeros of a function of three variables";
const description: string = "\nFor any integer n, consider the three functions\nf1,n(x,y,z) = xn+1 + yn+1 \u2212 zn+1f2,n(x,y,z) = (xy + yz + zx)*(xn-1 + yn-1 \u2212 zn-1)f3,n(x,y,z) = xyz*(xn-2 + yn-2 \u2212 zn-2)\nand their combination\nfn(x,y,z) = f1,n(x,y,z) + f2,n(x,y,z) \u2212 f3,n(x,y,z)\nWe call (x,y,z) a golden triple of order k if x, y, and z are all rational numbers of the form a / b with\n0 < a < b \u2264 k and there is (at least) one integer n, so that fn(x,y,z) = 0.\nLet s(x,y,z) = x + y + z.\nLet t = u / v be the sum of all distinct s(x,y,z) for all golden triples (x,y,z) of order 35. All the s(x,y,z) and t  must be in reduced form.\nFind u + v.\n";
const index: number = 180;
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
