import { Problem, Strategy } from "../Problem";
const title: string = "Swapping Counters";
const description: string = "\nA horizontal row comprising of 2n + 1 squares has n red counters placed at one end and n blue counters at the other end, being separated by a single empty square in the centre. For example, when n = 3.\n\n\n\nA counter can move from one square to the next (slide) or can jump over another counter (hop) as long as the square next to that counter is unoccupied.\n\n\n\nLet M(n) represent the minimum number of moves/actions to completely reverse the positions of the coloured counters; that is, move all the red counters to the right and all the blue counters to the left.\nIt can be verified M(3) = 15, which also happens to be a triangle number.\n\nIf we create a sequence based on the values of n for which M(n) is a triangle number then the first five terms would be:\n1, 3, 10, 22, and 63, and their sum would be 99.\n\nFind the sum of the first forty terms of this sequence.\n";
const index: number = 321;
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
