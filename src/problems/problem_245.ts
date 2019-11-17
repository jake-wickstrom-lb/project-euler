import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Coresilience";
const description: string = "\nWe shall call a fraction that cannot be cancelled down a resilient fraction. Furthermore we shall define the resilience of a denominator, R(d), to be the ratio of its proper fractions that are resilient; for example, R(12) = 4\u204411.\n\nThe resilience of a number d > 1 is then\n\u03C6(d)d \u2212 1\n, where \u03C6 is Euler's totient function.\nWe further define the coresilience of a number n > 1 as C(n)=\u00A0\nn \u2212 \u03C6(n)n \u2212 1.\nThe coresilience of a prime p is C(p)\n=\u00A0\n1p \u2212 1.\nFind the sum of all composite integers 1 < n \u2264 2\u00D71011, for which C(n) is a unit fraction.\n\n";
const index: number = 245;
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
