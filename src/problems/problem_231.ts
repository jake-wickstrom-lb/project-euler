import { Problem, Strategy } from "../Problem";
const title: string = "The prime factorisation of binomial coefficients";
const description: string = "\nThe binomial coefficient $\\displaystyle \\binom {10} 3 = 120$.\n$120 = 2^3 \\times 3 \\times 5 = 2 \\times 2 \\times 2 \\times 3 \\times 5$, and $2 + 2 + 2 + 3 + 5 = 14$.\nSo the sum of the terms in the prime factorisation of $\\displaystyle \\binom {10} 3$ is $14$.\n\nFind the sum of the terms in the prime factorisation of $\\displaystyle \\binom {20\\,000\\,000} {15\\,000\\,000}$.\n\n";
const index: number = 231;
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
