import { Problem, Strategy } from "../Problem";
const title: string = "Nim Square";
const description: string = "\n\nAlice and Bob play the game Nim Square.\nNim Square is just like ordinary three-heap normal play Nim, but the players may only remove a square number of stones from a heap.\nThe number of stones in the three heaps is represented by the ordered triple (a,b,c).\nIf 0\u2264a\u2264b\u2264c\u226429 then the number of losing positions for the next player is 1160.\n\n\nFind the number of losing positions for the next player if 0\u2264a\u2264b\u2264c\u2264100 000.\n\n\n\n";
const index: number = 310;
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
