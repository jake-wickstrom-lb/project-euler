import { Problem, Strategy } from "../Problem";
const title: string = "Exploring strings for which only one character comes lexicographically after its neighbour to the left";
const description: string = "\nTaking three different letters from the 26 letters of the alphabet, character strings of length three can be formed.\nExamples are 'abc', 'hat' and 'zyx'.\nWhen we study these three examples we see that for 'abc' two characters come lexicographically after its neighbour to the left. \nFor 'hat' there is exactly one character that comes lexicographically after its neighbour to the left. For 'zyx' there are zero characters that come lexicographically after its neighbour to the left.\nIn all there are 10400 strings of length 3 for which exactly one character comes lexicographically after its neighbour to the left.\nWe now consider strings of n \u2264 26 different characters from the alphabet. \nFor every n, p(n) is the number of strings of length n for which exactly one character comes lexicographically after its neighbour to the left. \nWhat is the maximum value of p(n)?\n";
const index: number = 158;
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
