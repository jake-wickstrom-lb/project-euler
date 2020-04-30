import { Problem, Strategy } from "../Problem";
const title: string = "An Arithmetic Geometric sequence";
const description: string = "\n\nGiven is the arithmetic-geometric sequence u(k) = (900-3k)rk-1.\nLet s(n) = \u03A3k=1...nu(k).\n\n\nFind the value of r for which s(5000) = -600,000,000,000.\n\n\nGive your answer rounded to 12 places behind the decimal point.\n\n\n\n\n";
const index: number = 235;
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
