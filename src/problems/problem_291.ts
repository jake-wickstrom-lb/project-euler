import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Panaitopol Primes";
const description: string = "\n\nA prime number $p$ is called a Panaitopol prime if $p = \\dfrac{x^4 - y^4}{x^3 + y^3}$ for some positive integers $x$ and $y$.\n\nFind how many Panaitopol primes are less than 5\u00D71015.\n\n\n  \n";
const index: number = 291;
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
