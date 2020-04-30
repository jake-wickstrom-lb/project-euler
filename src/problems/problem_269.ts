import { Problem, Strategy } from "../Problem";
const title: string = "Polynomials with at least one integer root";
const description: string = "\nA root or zero of a polynomial P(x) is a solution to the equation P(x) = 0. \nDefine Pn as the polynomial whose coefficients are the digits of n.\nFor example, P5703(x) = 5x3 + 7x2 + 3.\n\nWe can see that:Pn(0) is the last digit of n,\nPn(1) is the sum of the digits of n,\nPn(10) is n itself.Define Z(k) as the number of positive integers, n, not exceeding k for which the polynomial Pn has at least one integer root.\n\nIt can be verified that Z(100 000) is 14696.\n\nWhat is Z(1016)?\n\n";
const index: number = 269;
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
