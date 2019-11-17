import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Infinite string tour";
const description: string = "\nCreate a sequence of numbers using the \"Blum Blum Shub\" pseudo-random number generator:\n\ns0\n    =\n    14025256\n  sn+1\n    =\n    sn2 mod 20300713\n  \n\nConcatenate these numbers \u2009s0s1s2\u2026 to create a string w of infinite length.\nThen, w\u2009=\u200914025256741014958470038053646\u2026\n\nFor a positive integer k, if no substring of w exists with a sum of digits equal to k, p(k) is defined to be zero. If at least one substring of w exists with a sum of digits equal to k, we define p(k)\u2009=\u2009z, where z is the starting position of the earliest such substring.\n\nFor instance:\n\nThe substrings 1, 14, 1402, \u2026 \nwith respective sums of digits equal to 1, 5, 7, \u2026\nstart at position 1, hence p(1)\u2009=\u2009p(5)\u2009=\u2009p(7)\u2009=\u2009\u2026\u2009=\u20091.\n\nThe substrings 4, 402, 4025, \u2026\nwith respective sums of digits equal to 4, 6, 11, \u2026\nstart at position 2, hence p(4)\u2009=\u2009p(6)\u2009=\u2009p(11)\u2009=\u2009\u2026\u2009=\u20092.\n\nThe substrings 02, 0252, \u2026\nwith respective sums of digits equal to 2, 9, \u2026\nstart at position 3, hence p(2)\u2009=\u2009p(9)\u2009=\u2009\u2026\u2009=\u20093.\n\nNote that substring 025 starting at position 3, has a sum of digits equal to 7, but there was an earlier substring (starting at position 1) with a sum of digits equal to 7, so p(7)\u2009=\u20091, not 3.\n\nWe can verify that, for 0\u2009<\u2009k\u2009\u2264\u2009103, \u2211\u2009p(k) = 4742.\n\nFind \u2211\u2009p(k), for 0\u2009<\u2009k\u2009\u2264\u20092\u00D71015.\n";
const index: number = 238;
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
