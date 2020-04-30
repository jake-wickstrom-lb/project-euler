import { Problem, Strategy } from "../Problem";
const title: string = "Consecutive die throws";
const description: string = "\nLet n be a positive integer.\nA 6-sided die is thrown n times. Let c be the number of pairs of consecutive throws that give the same value.\n\nFor example, if n = 7 and the values of the die throws are (1,1,5,6,6,6,3), then the following pairs of consecutive throws give the same value:\n(1,1,5,6,6,6,3)\n(1,1,5,6,6,6,3)\n(1,1,5,6,6,6,3)\nTherefore, c = 3 for (1,1,5,6,6,6,3).\n\nDefine C(n) as the number of outcomes of throwing a 6-sided die n times such that c does not exceed \u03C0(n).1\nFor example, C(3) = 216, C(4) = 1290, C(11) = 361912500 and C(24) = 4727547363281250000.\n\nDefine S(L) as \u2211\u2009C(n) for 1 \u2264 n \u2264 L.\nFor example, S(50) mod 1\u00A0000\u00A0000\u00A0007 = 832833871.\n\nFind S(50\u00A0000\u00A0000) mod 1\u00A0000\u00A0000\u00A0007.\n\n 1 \u03C0 denotes the prime-counting function, i.e. \u03C0(n) is the number of primes \u2264 n.\n";
const index: number = 423;
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
