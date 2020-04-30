import { Problem, Strategy } from "../Problem";
const title: string = "Square root convergents";
const description: string = "\nIt is possible to show that the square root of two can be expressed as an infinite continued fraction.\n$\\sqrt 2 =1+ \\frac 1 {2+ \\frac 1 {2 +\\frac 1 {2+ \\dots}}}$\nBy expanding this for the first four iterations, we get:\n$1 + \\frac 1 2 = \\frac  32 = 1.5$\n$1 + \\frac 1 {2 + \\frac 1 2} = \\frac 7 5 = 1.4$\n$1 + \\frac 1 {2 + \\frac 1 {2+\\frac 1 2}} = \\frac {17}{12} = 1.41666 \\dots$\n$1 + \\frac 1 {2 + \\frac 1 {2+\\frac 1 {2+\\frac 1 2}}} = \\frac {41}{29} = 1.41379 \\dots$\nThe next three expansions are $\\frac {99}{70}$, $\\frac {239}{169}$, and $\\frac {577}{408}$, but the eighth expansion, $\\frac {1393}{985}$, is the first example where the number of digits in the numerator exceeds the number of digits in the denominator.\nIn the first one-thousand expansions, how many fractions contain a numerator with more digits than the denominator?\n\n";
const index: number = 57;
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
