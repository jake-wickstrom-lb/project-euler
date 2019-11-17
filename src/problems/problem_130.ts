import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Composites with prime repunit property";
const description: string = "\n\nA number consisting entirely of ones is called a repunit. We shall define R(k) to be a repunit of length k; for example, R(6) = 111111.\nGiven that n is a positive integer and GCD(n, 10) = 1, it can be shown that there always exists a value, k, for which R(k) is divisible by n, and let A(n) be the least such value of k; for example, A(7) = 6 and A(41) = 5.\nYou are given that for all primes, p > 5, that p \u2212 1 is divisible by A(p). For example, when p = 41, A(41) = 5, and 40 is divisible by 5.\nHowever, there are rare composite values for which this is also true; the first five examples being 91, 259, 451, 481, and 703.\nFind the sum of the first twenty-five composite values of n for whichGCD(n, 10) = 1 and n \u2212 1 is divisible by A(n).\n\n";
const index: number = 130;
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
