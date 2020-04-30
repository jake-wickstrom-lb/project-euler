import { Problem, Strategy } from "../Problem";
const title: string = "Digit factorial chains";
const description: string = "\n\nThe number 145 is well known for the property that the sum of the factorial of its digits is equal to 145:\n1! + 4! + 5! = 1 + 24 + 120 = 145\nPerhaps less well known is 169, in that it produces the longest chain of numbers that link back to 169; it turns out that there are only three such loops that exist:\n169 \u2192 363601 \u2192 1454 \u2192 169\n871 \u2192 45361 \u2192 871\n872 \u2192 45362 \u2192 872\nIt is not difficult to prove that EVERY starting number will eventually get stuck in a loop. For example,\n69 \u2192 363600 \u2192 1454 \u2192 169 \u2192 363601 (\u2192 1454)\n78 \u2192 45360 \u2192 871 \u2192 45361 (\u2192 871)\n540 \u2192 145 (\u2192 145)\nStarting with 69 produces a chain of five non-repeating terms, but the longest non-repeating chain with a starting number below one million is sixty terms.\nHow many chains, with a starting number below one million, contain exactly sixty non-repeating terms?\n\n";
const index: number = 74;
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
