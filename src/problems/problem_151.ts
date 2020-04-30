import { Problem, Strategy } from "../Problem";
const title: string = "Paper sheets of standard sizes: an expected-value problem";
const description: string = "\nA printing shop runs 16 batches (jobs) every week and each batch requires a sheet of special colour-proofing paper of size A5.\nEvery Monday morning, the foreman opens a new envelope, containing a large sheet of the special paper with size A1.\nHe proceeds to cut it in half, thus getting two sheets of size A2. Then he cuts one of them in half to get two sheets of size A3 and so on until he obtains the A5-size sheet needed for the first batch of the week.\nAll the unused sheets are placed back in the envelope.\n\nAt the beginning of each subsequent batch, he takes from the envelope one sheet of paper at random. If it is of size A5, he uses it. If it is larger, he repeats the 'cut-in-half' procedure until he has what he needs and any remaining sheets are always placed back in the envelope.\nExcluding the first and last batch of the week, find the expected number of times (during each week) that the foreman finds a single sheet of paper in the envelope.\nGive your answer rounded to six decimal places using the format x.xxxxxx\u00A0.\n";
const index: number = 151;
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
