import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Billionaire";
const description: string = "\nYou are given a unique investment opportunity.\nStarting with \u00A31 of capital, you can choose a fixed proportion, f, of your capital to bet on a fair coin toss repeatedly for 1000 tosses.\nYour return is double your bet for heads and you lose your bet for tails.\nFor example, if f\u2009=\u20091/4,  for the first toss you bet \u00A30.25, and if heads comes up you win \u00A30.5 and so then have \u00A31.5. You then bet \u00A30.375 and if the second toss is tails, you have \u00A31.125.\nChoosing f to maximize your chances of having at least \u00A31,000,000,000 after 1,000 flips, what is the chance that you become a billionaire?\nAll computations are assumed to be exact (no rounding), but give your answer rounded to 12 digits behind the decimal point in the form 0.abcdefghijkl.\n\n";
const index: number = 267;
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
