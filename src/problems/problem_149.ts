import { Problem, Strategy } from "../Problem";
const title: string = "Searching for a maximum-sum subsequence";
const description: string = "\nLooking at the table below, it is easy to verify that the maximum possible sum of adjacent numbers in any direction (horizontal, vertical, diagonal or anti-diagonal) is 16 (= 8 + 7 + 1).\n\n\n\u221225329\u22126513273\u221218\u22124\u00A0 8\n\nNow, let us repeat the search, but on a much larger scale:\n\nFirst, generate four million pseudo-random numbers using a specific form of what is known as a \"Lagged Fibonacci Generator\":\n\nFor 1 \u2264 k \u2264 55, sk = [100003 \u2212 200003k + 300007k3] (modulo 1000000) \u2212 500000.\nFor 56 \u2264 k \u2264 4000000, sk = [sk\u221224 + sk\u221255 + 1000000] (modulo 1000000) \u2212 500000.\n\nThus, s10 = \u2212393027 and s100 = 86613.\n\nThe terms of s are then arranged in a 2000\u00D72000 table, using the first 2000 numbers to fill the first row (sequentially), the next 2000 numbers to fill the second row, and so on.\n\nFinally, find the greatest sum of (any number of) adjacent entries in any direction (horizontal, vertical, diagonal or anti-diagonal).\n";
const index: number = 149;
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
