import { Problem, Strategy } from "../Problem";
const title: string = "Nontransitive sets of dice";
const description: string = "\n\nConsider the following set of dice with nonstandard pips:\n\n\n\nDie A: 1 4 4 4 4 4\nDie B: 2 2 2 5 5 5\nDie C: 3 3 3 3 3 6\n\n\nA game is played by two players picking a die in turn and rolling it. The player who rolls the highest value wins.\n\n\n\nIf the first player picks die A and the second player picks die B we get\nP(second player wins) = 7/12 > 1/2\n\n\nIf the first player picks die B and the second player picks die C we get\nP(second player wins) = 7/12 > 1/2\n\n\nIf the first player picks die C and the second player picks die A we get\nP(second player wins) = 25/36 > 1/2\n\n\nSo whatever die the first player picks, the second player can pick another die and have a larger than 50% chance of winning.\nA set of dice having this property is called a nontransitive set of dice.\n\n\n\nWe wish to investigate how many sets of nontransitive dice exist. We will assume the following conditions:There are three six-sided dice with each side having between 1 and N pips, inclusive.\nDice with the same set of pips are equal, regardless of which side on the die the pips are located.\nThe same pip value may appear on multiple dice; if both players roll the same value neither player wins.\nThe sets of dice {A,B,C}, {B,C,A} and {C,A,B} are the same set.\n\nFor N = 7 we find there are 9780 such sets.\nHow many are there for N = 30 ?\n\n";
const index: number = 376;
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
