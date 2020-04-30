import { Problem, Strategy } from "../Problem";
const title: string = "Box-ball system";
const description: string = "\n\nConsider an infinite row of boxes. Some of the boxes contain a ball. For example, an initial configuration of 2 consecutive occupied boxes followed by 2 empty boxes, 2 occupied boxes, 1 empty box, and 2 occupied boxes can be denoted by the sequence (2, 2, 2, 1, 2), in which the number of consecutive occupied and empty boxes appear alternately.\n\n\nA turn consists of moving each ball exactly once according to the following rule: Transfer the leftmost ball which has not been moved to the nearest empty box to its right.\n\n\nAfter one turn the sequence (2, 2, 2, 1, 2) becomes (2, 2, 1, 2, 3) as can be seen below; note that we begin the new sequence starting at the first occupied box.\n\n\n\n\n\n\nA system like this is called a Box-Ball System or BBS for short.\n\n\nIt can be shown that after a sufficient number of turns, the system evolves to a state where the consecutive numbers of occupied boxes is invariant. In the example below, the consecutive numbers of occupied boxes evolves to [1, 2, 3]; we shall call this the final state.\n\n\n\n\n\n\nWe define the sequence {ti}:s0 = 290797\nsk+1 = sk2 mod 50515093\ntk = (sk mod 64) + 1\n\nStarting from the initial configuration (t0, t1, \u2026, t10), the final state becomes [1, 3, 10, 24, 51, 75].\nStarting from the initial configuration (t0, t1, \u2026, t10 000 000), find the final state.\nGive as your answer the sum of the squares of the elements of the final state. For example, if the final state is [1, 2, 3] then 14 ( = 12 + 22 + 32) is your answer.\n\n";
const index: number = 426;
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
