import { Problem, Strategy } from "../Problem";
const title: string = "Totient Chains";
const description: string = "\nLet \u03C6 be Euler's totient function, i.e. for a natural number n,\n\u03C6(n) is the number of k, 1 \u2264 k \u2264 n, for which gcd(k,n) = 1.\n\nBy iterating \u03C6, each positive integer generates a decreasing chain of numbers ending in 1.\nE.g. if we start with 5 the sequence 5,4,2,1 is generated.\nHere is a listing of all chains with length 4:\n\n\n5,4,2,1\n7,6,2,1\n8,4,2,1\n9,6,2,1\n10,4,2,1\n12,4,2,1\n14,6,2,1\n18,6,2,1\n\nOnly two of these chains start with a prime, their sum is 12.\n\nWhat is the sum of all primes less than 40000000 which generate a chain of length 25?\n\n\n\n";
const index: number = 214;
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
