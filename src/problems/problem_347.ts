import { Problem, Strategy } from "../Problem";
const title: string = "Largest integer divisible by two primes";
const description: string = "\n\nThe largest integer \u2264 100 that is only divisible by both the primes 2 and 3 is 96, as 96=32*3=25*3.\nFor two distinct primes p and q let M(p,q,N) be the largest positive integer \u2264N only divisible\nby both p and q and M(p,q,N)=0 if such a positive integer does not exist.\n\n\nE.g. M(2,3,100)=96. \nM(3,5,100)=75 and not 90 because 90 is divisible by 2 ,3 and 5.\nAlso M(2,73,100)=0 because there does not exist a positive integer \u2264 100 that is divisible by both 2 and 73.\n\n\nLet S(N) be the sum of all distinct M(p,q,N).\nS(100)=2262.\n\n\nFind S(10 000 000).\n\n\n\n\n\n\n";
const index: number = 347;
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
