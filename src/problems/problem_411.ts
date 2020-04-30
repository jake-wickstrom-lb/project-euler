import { Problem, Strategy } from "../Problem";
const title: string = "Uphill paths";
const description: string = "\n\nLet n be a positive integer. Suppose there are stations at the coordinates (x, y) = (2i mod n, 3i mod n) for 0 \u2264 i \u2264 2n. We will consider stations with the same coordinates as the same station.\n\nWe wish to form a path from (0, 0) to (n, n) such that the x and y coordinates never decrease.\nLet S(n) be the maximum number of stations such a path can pass through.\n\nFor example, if n = 22, there are 11 distinct stations, and a valid path can pass through at most 5 stations. Therefore, S(22) = 5.\nThe case is illustrated below, with an example of an optimal path:\n\n\n\nIt can also be verified that S(123) = 14 and S(10000) = 48.\n\nFind \u2211\u2009S(k5) for 1 \u2264 k \u2264 30.\n\n";
const index: number = 411;
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
