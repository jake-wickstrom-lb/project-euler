import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Stone Game III";
const description: string = "\n\nTwo players, Anton and Bernhard, are playing the following game.\nThere is one pile of n stones.\nThe first player may remove any positive number of stones, but not the whole pile.\nThereafter, each player may remove at most twice the number of stones his opponent took on the previous move.\nThe player who removes the last stone wins.\n\n\nE.g. n=5\nIf the first player takes anything more than one stone the next player will be able to take all remaining stones.\nIf the first player takes one stone, leaving four, his opponent will take also one stone, leaving three stones.\nThe first player cannot take all three because he may take at most 2x1=2 stones. So let's say he takes also one stone, leaving 2. The second player can take the two remaining stones and wins.\nSo 5 is a losing position for the first player.\nFor some winning positions there is more than one possible move for the first player.\nE.g. when n=17 the first player can remove one or four stones.\n\n\nLet M(n) be the maximum number of stones the first player can take from a winning position at his first turn and M(n)=0 for any other position.\n\n\n\u2211\u2009M(n) for n\u2264100 is 728.\n\n\nFind  \u2211\u2009M(n) for n\u22641018.\nGive your answer modulo 108.\n\n";
const index: number = 366;
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
