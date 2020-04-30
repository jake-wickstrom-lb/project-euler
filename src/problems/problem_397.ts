import { Problem, Strategy } from "../Problem";
const title: string = "Triangle on parabola";
const description: string = "\n\nOn the parabola y = x2/k, three points A(a, a2/k), B(b, b2/k) and C(c, c2/k) are chosen.\n\n\nLet F(K, X) be the number of the integer quadruplets (k, a, b, c) such that at least one angle of the triangle ABC is 45-degree, with 1 \u2264 k \u2264 K and -X \u2264 a < b < c \u2264 X.\n\n\nFor example, F(1, 10) = 41 and F(10, 100) = 12492.\nFind F(106, 109).\n\n";
const index: number = 397;
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
