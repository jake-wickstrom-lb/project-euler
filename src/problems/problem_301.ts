import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Nim";
const description: string = "\nNim is a game played with heaps of stones, where two players take it in turn to remove any number of stones from any heap until no stones remain.\n\nWe'll consider the three-heap normal-play version of Nim, which works as follows:\n- At the start of the game there are three heaps of stones.\n- On his turn the player removes any positive number of stones from any single heap.\n- The first player unable to move (because no stones remain) loses.\n\n If (n1,n2,n3) indicates a Nim position consisting of heaps of size n1, n2 and n3 then there is a simple function X(n1,n2,n3) \u2014 that you may look up or attempt to deduce for yourself \u2014 that returns:\nzero if, with perfect strategy, the player about to move will eventually lose; or\nnon-zero if, with perfect strategy, the player about to move will eventually win.For example X(1,2,3) = 0 because, no matter what the current player does, his opponent can respond with a move that leaves two heaps of equal size, at which point every move by the current player can be mirrored by his opponent until no stones remain; so the current player loses. To illustrate:\n- current player moves to (1,2,1)\n- opponent moves to (1,0,1)\n- current player moves to (0,0,1)\n- opponent moves to (0,0,0), and so wins.\n\nFor how many positive integers n\u2009\u2264\u2009230 does X(n,2n,3n) = 0 ?\n\n\n";
const index: number = 301;
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
