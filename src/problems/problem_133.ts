import { Problem, Strategy } from "../Problem";
const title: string = "Repunit nonfactors";
const description: string = "\nA number consisting entirely of ones is called a repunit. We shall define R(k) to be a repunit of length k; for example, R(6) = 111111.\nLet us consider repunits of the form R(10n).\nAlthough R(10), R(100), or R(1000) are not divisible by 17, R(10000) is divisible by 17. Yet there is no value of n for which R(10n) will divide by 19. In fact, it is remarkable that 11, 17, 41, and 73 are the only four primes below one-hundred that can  be a factor of R(10n).\nFind the sum of all the primes below one-hundred thousand that will never be a factor of R(10n).\n\n";
const index: number = 133;
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
