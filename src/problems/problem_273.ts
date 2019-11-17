import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Sum of Squares";
const description: string = "\nConsider equations of the form: a2 + b2 = N, 0 \u2264 a \u2264 b, a, b and N integer.\n\nFor N=65 there are two solutions:\na=1, b=8 and a=4, b=7.\nWe call S(N) the sum of the values of a of all solutions of a2 + b2 = N, 0 \u2264 a \u2264 b, a, b and N integer.\nThus S(65) = 1 + 4 = 5.\nFind \u2211\u2009S(N), for all squarefree N only divisible by primes of the form 4k+1 with 4k+1 < 150.\n\n";
const index: number = 273;
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
