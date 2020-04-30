import { Problem, Strategy } from "../Problem";
const title: string = "Repunit divisibility";
const description: string = "\n\nA number consisting entirely of ones is called a repunit. We shall define R(k) to be a repunit of length k; for example, R(6) = 111111.\nGiven that n is a positive integer and GCD(n, 10) = 1, it can be shown that there always exists a value, k, for which R(k) is divisible by n, and let A(n) be the least such value of k; for example, A(7) = 6 and A(41) = 5.\nThe least value of n for which A(n) first exceeds ten is 17.\nFind the least value of n for which A(n) first exceeds one-million.\n\n";
const index: number = 129;
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
