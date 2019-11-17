import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Selective Amnesia";
const description: string = "\nLarry and Robin play a memory game involving of a sequence of random numbers between 1 and 10, inclusive, that are called out one at a time. Each player can remember up to 5 previous numbers. When the called number is in a player's memory, that player is awarded a point. If it's not, the player adds the called number to his memory, removing another number if his memory is full.\n\nBoth players start with empty memories. Both players always add new missed numbers to their memory but use a different strategy in deciding which number to remove:\nLarry's strategy is to remove the number that hasn't been called in the longest time.\nRobin's strategy is to remove the number that's been in the memory the longest time.\n\nExample game:Turn\n  Callednumber\n  Larry'smemory\n  Larry'sscore\n  Robin'smemory\n  Robin'sscore\n1\n  1\n  1\n  0\n  1\n  0\n2\n  2\n  1,2\n  0\n  1,2\n  0\n3\n  4\n  1,2,4\n  0\n  1,2,4\n  0\n4\n  6\n  1,2,4,6\n  0\n  1,2,4,6\n  0\n5\n  1\n  1,2,4,6\n  1\n  1,2,4,6\n  1\n6\n  8\n  1,2,4,6,8\n  1\n  1,2,4,6,8\n  1\n7\n  10\n  1,4,6,8,10\n  1\n  2,4,6,8,10\n  1\n8\n  2\n  1,2,6,8,10\n  1\n  2,4,6,8,10\n  2\n9\n  4\n  1,2,4,8,10\n  1\n  2,4,6,8,10\n  3\n10\n  1\n  1,2,4,8,10\n  2\n  1,4,6,8,10\n  3\n\n\nDenoting Larry's score by L and Robin's score by R, what is the expected value of |L-R| after 50 turns? Give your answer rounded to eight decimal places using the format x.xxxxxxxx .\n";
const index: number = 298;
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
