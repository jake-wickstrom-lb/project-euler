import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Licence plates";
const description: string = "\n\nOregon licence plates consist of three letters followed by a three digit number (each digit can be from [0..9]).\nWhile driving to work Seth plays the following game:\nWhenever the numbers of two licence plates seen on his trip add to 1000 that's a win.\n\n\nE.g. MIC-012 and HAN-988 is a win and RYU-500 and SET-500 too. (as long as he sees them in the same trip). \n\n\nFind the expected number of plates he needs to see for a win.\nGive your answer rounded to 8 decimal places behind the decimal point.\n\n\nNote: We assume that each licence plate seen is equally likely to have any three digit number on it.\n\n\n\n\n\n";
const index: number = 371;
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
