import { Problem, Strategy } from "../Problem";
const title: string = "Pseudo-Fortunate Numbers";
const description: string = "\n\nAn even positive integer N will be called admissible, if it is a power of 2 or its distinct prime factors are consecutive primes.\nThe first twelve admissible numbers are 2,4,6,8,12,16,18,24,30,32,36,48.\n\n\nIf N is admissible, the smallest integer M > 1 such that N+M is prime, will be called the pseudo-Fortunate number for N.\n\n\nFor example, N=630 is admissible since it is even and its distinct prime factors are the consecutive primes 2,3,5 and 7. \nThe next prime number after 631 is 641; hence, the pseudo-Fortunate number for 630 is M=11.\nIt can also be seen that the pseudo-Fortunate number for 16 is 3.\n\n\nFind the sum of all distinct pseudo-Fortunate numbers for admissible numbers N less than 109.\n\n\n\n\n";
const index: number = 293;
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
