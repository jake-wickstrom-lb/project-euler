import { Problem, Strategy } from "../Problem";
const title: string = "Weak Goodstein sequence";
const description: string = "\n\nFor any positive integer n, the nth weak Goodstein sequence {g1, g2, g3, ...} is defined as:\n g1 = n\n for k > 1, gk is obtained by writing gk-1 in base k, interpreting it as a base k + 1 number, and subtracting 1.\n\nThe sequence terminates when gk becomes 0.\n\n\nFor example, the 6th weak Goodstein sequence is {6, 11, 17, 25, ...}:\n g1 = 6.\n g2 = 11 since 6 = 1102, 1103 = 12, and 12 - 1 = 11.\n g3 = 17 since 11 = 1023, 1024 = 18, and 18 - 1 = 17.\n g4 = 25 since 17 = 1014, 1015 = 26, and 26 - 1 = 25.\n\nand so on.\n\n\nIt can be shown that every weak Goodstein sequence terminates.\n\n\nLet G(n) be the number of nonzero elements in the nth weak Goodstein sequence.\nIt can be verified that G(2) = 3, G(4) = 21 and G(6) = 381.\nIt can also be verified that \u2211\u2009G(n) = 2517 for 1 \u2264 n < 8.\n\n\nFind the last 9 digits of \u2211\u2009G(n) for 1 \u2264 n < 16.\n\n";
const index: number = 396;
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
