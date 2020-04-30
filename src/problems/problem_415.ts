import { Problem, Strategy } from "../Problem";
const title: string = "Titanic sets";
const description: string = "\nA set of lattice points S is called a titanic set if there exists a line passing through exactly two points in S.\n\nAn example of a titanic set is S = {(0, 0), (0, 1), (0, 2), (1, 1), (2, 0), (1, 0)}, where the line passing through (0, 1) and (2, 0) does not pass through any other point in S.\n\nOn the other hand, the set {(0, 0), (1, 1), (2, 2), (4, 4)} is not a titanic set since the line passing through any two points in the set also passes through the other two.\n\nFor any positive integer N, let T(N) be the number of titanic sets S whose every point (x, y) satisfies 0 \u2264 x, y \u2264 N.\nIt can be verified that T(1) = 11, T(2) = 494, T(4) = 33554178, T(111) mod 108 = 13500401 and T(105)\u00A0mod\u00A0108 = 63259062.\n\nFind T(1011)\u00A0mod\u00A0108.\n\n";
const index: number = 415;
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
