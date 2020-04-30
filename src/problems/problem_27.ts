import { Problem, Strategy } from "../Problem";
const title: string = "Quadratic primes";
const description: string = "\nEuler discovered the remarkable quadratic formula:\n$n^2 + n + 41$\nIt turns out that the formula will produce 40 primes for the consecutive integer values $0 \\le n \\le 39$. However, when $n = 40, 40^2 + 40 + 41 = 40(40 + 1) + 41$ is divisible by 41, and certainly when $n = 41, 41^2 + 41 + 41$ is clearly divisible by 41.\nThe incredible formula $n^2 - 79n + 1601$ was discovered, which produces 80 primes for the consecutive values $0 \\le n \\le 79$. The product of the coefficients, \u221279 and 1601, is \u2212126479.\nConsidering quadratics of the form:\n\n$n^2 + an + b$, where $|a| < 1000$ and $|b| \\le 1000$where $|n|$ is the modulus/absolute value of $n$e.g. $|11| = 11$ and $|-4| = 4$\n\nFind the product of the coefficients, $a$ and $b$, for the quadratic expression that produces the maximum number of primes for consecutive values of $n$, starting with $n = 0$.\n";
const index: number = 27;
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
