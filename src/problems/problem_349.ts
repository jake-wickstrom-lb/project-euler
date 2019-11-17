import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Langton's ant";
const description: string = "\n\nAn ant moves on a regular grid of squares that are coloured either black or white. \nThe ant is always oriented in one of the cardinal directions (left, right, up or down) and moves from square to adjacent square according to the following rules:\n- if it is on a black square, it flips the colour of the square to white, rotates 90 degrees counterclockwise and moves forward one square.\n- if it is on a white square, it flips the colour of the square to black, rotates 90 degrees clockwise and moves forward one square.\n\nStarting with a grid that is entirely white, how many squares are black after 1018 moves of the ant?\n\n\n";
const index: number = 349;
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
