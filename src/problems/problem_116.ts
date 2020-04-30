import { Problem, Strategy } from "../Problem";
const title: string = "Red, green or blue tiles";
const description: string = "\nA row of five grey square tiles is to have a number of its tiles replaced with coloured oblong tiles chosen from red (length two), green (length three), or blue (length four).\nIf red tiles are chosen there are exactly seven ways this can be done.\n\n\n\n\n\nIf green tiles are chosen there are three ways.\n\n\n\n\n\nAnd if blue tiles are chosen there are two ways.\n\n\n\n\n\nAssuming that colours cannot be mixed there are 7 + 3 + 2 = 12 ways of replacing the grey tiles in a row measuring five units in length.\nHow many different ways can the grey tiles in a row measuring fifty units in length be replaced if colours cannot be mixed and at least one coloured tile must be used?\nNOTE: This is related to Problem 117.\n";
const index: number = 116;
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
