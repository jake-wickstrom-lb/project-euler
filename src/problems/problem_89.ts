import { Problem, Strategy } from "../Problem";
const title: string = "Roman numerals";
const description: string = "\nFor a number written in Roman numerals to be considered valid there are basic rules which must be followed. Even though the rules allow some numbers to be expressed in more than one way there is always a \"best\" way of writing a particular number.\nFor example, it would appear that there are at least six ways of writing the number sixteen:\nIIIIIIIIIIIIIIII\nVIIIIIIIIIII\nVVIIIIII\nXIIIIII\nVVVI\nXVI\nHowever, according to the rules only XIIIIII and XVI are valid, and the last example is considered to be the most efficient, as it uses the least number of numerals.\nThe 11K text file, roman.txt (right click and 'Save Link/Target As...'), contains one thousand numbers written in valid, but not necessarily minimal, Roman numerals; see About... Roman Numerals for the definitive rules for this problem.\nFind the number of characters saved by writing each of these in their minimal form.\nNote: You can assume that all the Roman numerals in the file contain no more than four consecutive identical units.\n\n";
const index: number = 89;
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
