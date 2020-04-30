import { Problem, Strategy } from "../Problem";
const title: string = "Dice Game";
const description: string = "\nPeter has nine four-sided (pyramidal) dice, each with faces numbered 1, 2, 3, 4.\nColin has six six-sided (cubic) dice, each with faces numbered 1, 2, 3, 4, 5, 6.\n\nPeter and Colin roll their dice and compare totals: the highest total wins. The result is a draw if the totals are equal.\n\nWhat is the probability that Pyramidal Pete beats Cubic Colin? Give your answer rounded to seven decimal places in the form 0.abcdefg\n";
const index: number = 205;
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
