import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Divisibility Multipliers";
const description: string = "\nFor each integer p > 1 coprime to 10 there is a positive divisibility multiplier m < p which preserves divisibility by p for the following function on any positive integer, n:\n\nf(n) = (all but the last digit of n) + (the last digit of n) * m\n\nThat is, if m is the divisibility multiplier for p, then f(n) is divisible by p if and only if n is divisible by p.\n\n(When n is much larger than p, f(n) will be less than n and repeated application of f provides a multiplicative divisibility test for p.)\n\nFor example, the divisibility multiplier for 113 is 34.\n\nf(76275) = 7627 + 5 * 34 = 7797 : 76275 and 7797 are both divisible by 113f(12345) = 1234 + 5 * 34 = 1404 : 12345 and 1404 are both not divisible by 113\n\nThe sum of the divisibility multipliers for the primes that are coprime to 10 and less than 1000 is 39517. What is the sum of the divisibility multipliers for the primes that are coprime to 10 and less than 107?\n\n";
const index: number = 274;
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
