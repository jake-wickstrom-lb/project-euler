import { Problem, Strategy } from "../Problem";
const title: string = "Subsequence of Thue-Morse sequence";
const description: string = "\nThe Thue-Morse sequence {Tn} is a binary sequence satisfying:\nT0 = 0\nT2n = Tn\nT2n+1 = 1 - Tn\n\nThe first several terms of {Tn} are given as follows:\n01101001100101101001011001101001....\n\n\n\nWe define {An} as the sorted sequence of integers such that the binary expression of each element appears as a subsequence in {Tn}.\nFor example, the decimal number 18 is expressed as 10010 in binary. 10010 appears in {Tn} (T8 to T12), so 18 is an element of {An}.\nThe decimal number 14 is expressed as 1110 in binary. 1110 never appears in {Tn}, so 14 is not an element of {An}.\n\n\n\nThe first several terms of An are given as follows:\nn0123456789101112\u2026An012345691011121318\u2026\n\n\n\nWe can also verify that A100 = 3251 and A1000 = 80852364498.\n\n\n\nFind the last 9 digits of $\\sum \\limits_{k = 1}^{18} {A_{10^k}}$.\n\n";
const index: number = 361;
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
