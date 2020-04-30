import { Problem, Strategy } from "../Problem";
const title: string = "Maximum product of parts";
const description: string = "\nLet N be a positive integer and let N be split into k equal parts, r = N/k, so that N = r + r + ... + r.\nLet P be the product of these parts, P = r \u00D7 r \u00D7 ... \u00D7 r = rk.\n\nFor example, if 11 is split into five equal parts, 11 = 2.2 + 2.2 + 2.2 + 2.2 + 2.2, then P = 2.25 = 51.53632.\n\nLet M(N) = Pmax for a given value of N.\n\nIt turns out that the maximum for N = 11 is found by splitting eleven into four equal parts which leads to Pmax = (11/4)4; that is, M(11) = 14641/256 = 57.19140625, which is a terminating decimal.\n\nHowever, for N = 8 the maximum is achieved by splitting it into three equal parts, so M(8) = 512/27, which is a non-terminating decimal.\n\nLet D(N) = N if M(N) is a non-terminating decimal and D(N) = -N if M(N) is a terminating decimal.\n\nFor example, \u2211\u2009D(N) for 5 \u2264 N \u2264 100 is 2438.\n\nFind \u2211\u2009D(N) for 5 \u2264 N \u2264 10000.\n\n";
const index: number = 183;
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
