import { Problem, Strategy } from "../Problem";
const title: string = "Counting Sundays";
const description: string = "\n\nYou are given the following information, but you may prefer to do some research for yourself.\n1 Jan 1900 was a Monday.\nThirty days has September,\nApril, June and November.\nAll the rest have thirty-one,\nSaving February alone,\nWhich has twenty-eight, rain or shine.\nAnd on leap years, twenty-nine.\nA leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.\nHow many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?\n\n";
const index: number = 19;
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
