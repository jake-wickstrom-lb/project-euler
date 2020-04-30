import { Problem, Strategy } from "../Problem";
const title: string = "Crack-free Walls";
const description: string = "\nConsider the problem of building a wall out of 2\u00D71 and 3\u00D71 bricks (horizontal\u00D7vertical dimensions) such that, for extra strength, the gaps between horizontally-adjacent bricks never line up in consecutive layers, i.e. never form a \"running crack\".\n\nFor example, the following 9\u00D73 wall is not acceptable due to the running crack shown in red:\n\n\n\n\nThere are eight ways of forming a crack-free 9\u00D73 wall, written W(9,3) = 8.\n\nCalculate W(32,10).\n\n\n\n\n";
const index: number = 215;
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
