import { Problem, Strategy } from "../Problem";
const title: string = "Prime connection";
const description: string = "\n\nTwo positive numbers A and B are said to be connected (denoted by \"A \u2194 B\") if one of these conditions holds:\n(1) A and B have the same length and differ in exactly one digit; for example, 123 \u2194 173.\n(2) Adding one digit to the left of A (or B) makes B (or A); for example, 23 \u2194 223 and 123 \u2194 23.\n\n\nWe call a prime P a 2's relative if there exists a chain of connected primes between 2 and P and no prime in the chain exceeds P.\n\n\nFor example, 127 is a 2's relative. One of the possible chains is shown below:\n2 \u2194 3 \u2194 13 \u2194 113 \u2194 103 \u2194 107 \u2194 127\nHowever, 11 and 103 are not 2's relatives.\n\n\nLet F(N) be the sum of the primes \u2264 N which are not 2's relatives.\nWe can verify that F(103) = 431 and F(104) = 78728.\n\n\nFind F(107).\n\n";
const index: number = 425;
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
