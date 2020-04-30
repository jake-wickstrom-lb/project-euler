import { Problem, Strategy } from "../Problem";
const title: string = "Flea Circus";
const description: string = "\nA 30\u00D730 grid of squares contains 900 fleas, initially one flea per square.\nWhen a bell is rung, each flea jumps to an adjacent square at random (usually 4 possibilities, except for fleas on the edge of the grid or at the corners).\n\nWhat is the expected number of unoccupied squares after 50 rings of the bell? Give your answer rounded to six decimal places.\n";
const index: number = 213;
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
