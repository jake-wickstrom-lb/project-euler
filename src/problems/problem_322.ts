import { Problem, Strategy } from "../Problem";
const title: string = "Binomial coefficients divisible by 10";
const description: string = "\n\nLet T(m, n) be the number of the binomial coefficients iCn that are divisible by 10 for n \u2264 i < m(i, m and n are positive integers).\nYou are given that T(109, 107-10) = 989697000.\n\n\nFind T(1018, 1012-10).\n\n";
const index: number = 322;
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
