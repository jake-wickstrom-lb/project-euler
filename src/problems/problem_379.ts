import { Problem, Strategy } from "../Problem";
const title: string = "Least common multiple count";
const description: string = "\n\nLet f(n) be the number of couples (x,y) with x and y positive integers, x \u2264 y and the least common multiple of x and y equal to n.\n\n\nLet g be the summatory function of f, i.e.: \ng(n) = \u2211 f(i)  for 1 \u2264 i \u2264 n.\n\n\nYou are given that g(106) = 37429395.\n\n\nFind g(1012).\n\n\n\n\n\n\n\n";
const index: number = 379;
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
