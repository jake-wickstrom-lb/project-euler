import { Problem, Strategy } from "../Problem";
const title: string = "Generating polygons";
const description: string = "\n\nA polygon is a flat shape consisting of straight line segments that are joined to form a closed chain or circuit. A polygon consists of at least three sides and does not self-intersect.\n\n\n\nA set S of positive numbers is said to generate a polygon P if: no two sides of P are the same length,\n the length of every side of P is in S, and\n S contains no other value.\n\nFor example:\nThe set {3, 4, 5} generates a polygon with sides 3, 4, and 5 (a triangle).\nThe set {6, 9, 11, 24} generates a polygon with sides 6, 9, 11, and 24 (a quadrilateral).\nThe sets {1, 2, 3} and {2, 3, 4, 9} do not generate any polygon at all.\n\n\nConsider the sequence s, defined as follows:s1 = 1, s2 = 2, s3 = 3\nsn = sn-1 + sn-3 for n > 3.\n\nLet Un be the set {s1, s2, ..., sn}. For example, U10 = {1, 2, 3, 4, 6, 9, 13, 19, 28, 41}.\nLet f(n) be the number of subsets of Un which generate at least one polygon.\nFor example, f(5) = 7, f(10) = 501 and f(25) = 18635853.\n\n\n\nFind the last 9 digits of f(1018).\n\n";
const index: number = 382;
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
