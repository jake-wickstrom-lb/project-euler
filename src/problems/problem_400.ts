import { Problem, Strategy } from "../Problem";
const title: string = "Fibonacci tree game";
const description: string = "\n\nA Fibonacci tree is a binary tree recursively defined as:T(0) is the empty tree.\nT(1) is the binary tree with only one node.\nT(k) consists of a root node that has T(k-1) and T(k-2) as children.\n\nOn such a tree two players play a take-away game. On each turn a player selects a node and removes that node along with the subtree rooted at that node.\nThe player who is forced to take the root node of the entire tree loses.\n\n\nHere are the winning moves of the first player on the first turn for T(k) from k=1 to k=6.\n\n\n\n\nLet f(k) be the number of winning moves of the first player (i.e. the moves for which the second player has no winning strategy) on the first turn of the game when this game is played on T(k).\n\n\n\nFor example, f(5) = 1 and f(10) = 17.\n\n\n\nFind f(10000). Give the last 18 digits of your answer.\n\n";
const index: number = 400;
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
