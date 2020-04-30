import { Problem, Strategy } from "../Problem";
const title: string = "Pythagorean Polygons";
const description: string = "\nWe shall define a pythagorean polygon  to be a convex polygon with the following properties:there are at least three vertices,\nno three vertices are aligned,\neach vertex has integer coordinates,\neach edge has integer length.For a given integer n, define P(n) as the number of distinct pythagorean polygons for which the perimeter is \u2264\u2009n.\nPythagorean polygons should be considered distinct as long as none is a translation of another.\n\nYou are given that P(4)\u2009=\u20091, P(30)\u2009=\u20093655 and P(60)\u2009=\u2009891045.\nFind P(120).\n";
const index: number = 292;
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
