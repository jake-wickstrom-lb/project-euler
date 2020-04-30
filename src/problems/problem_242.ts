import { Problem, Strategy } from "../Problem";
const title: string = "Odd Triplets";
const description: string = "\nGiven the set {1,2,...,n}, we define f(n,k) as the number of its k-element subsets with an odd sum of elements. For example, f(5,3)\u2009=\u20094, since the set {1,2,3,4,5} has four 3-element subsets having an odd sum of elements, i.e.: {1,2,4}, {1,3,5}, {2,3,4} and {2,4,5}.\n\nWhen all three values n, k and f(n,k) are odd, we say that they make \nan odd-triplet [n,k,f(n,k)].\n\nThere are exactly five odd-triplets with n\u2009\u2264\u200910, namely:\n[1,1,f(1,1)\u2009=\u20091], [5,1,f(5,1)\u2009=\u20093], [5,5,f(5,5)\u2009=\u20091], [9,1,f(9,1)\u2009=\u20095] and [9,9,f(9,9)\u2009=\u20091].\n\nHow many odd-triplets are there with n\u2009\u2264\u20091012\u2009?\n";
const index: number = 242;
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
