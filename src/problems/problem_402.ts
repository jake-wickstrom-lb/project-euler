import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Integer-valued polynomials";
const description: string = "\n\nIt can be shown that the polynomial n4 + 4n3 + 2n2 + 5n is a multiple of 6 for every integer n. It can also be shown that 6 is the largest integer satisfying this property.\n\n\nDefine M(a, b, c) as the maximum m such that n4 + an3 + bn2 + cn is a multiple of m for all integers n. For example, M(4, 2, 5) = 6.\n\n\nAlso, define S(N) as the sum of M(a, b, c) for all 0 < a, b, c \u2264 N.\n\n\nWe can verify that S(10) = 1972 and S(10000) = 2024258331114.\n\n\nLet Fk be the Fibonacci sequence:\nF0 = 0, F1 = 1 and\nFk = Fk-1 + Fk-2 for k \u2265 2.\n\n\nFind the last 9 digits of \u2211\u2009S(Fk) for 2 \u2264 k \u2264 1234567890123.\n\n";
const index: number = 402;
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
