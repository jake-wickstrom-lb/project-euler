import { Problem, Strategy } from "../Problem";
const title: string = "Bounded Sequences";
const description: string = "\n\nLet x1, x2,..., xn be a sequence of length n such that:\nx1 = 2\nfor all 1 < i \u2264 n : xi-1 < xi\nfor all i and j with 1 \u2264 i, j \u2264 n : (xi) j < (xj + 1)i\n\nThere are only five such sequences of length 2, namely:\n{2,4}, {2,5}, {2,6}, {2,7} and {2,8}.\nThere are 293 such sequences of length 5; three examples are given below:\n{2,5,11,25,55}, {2,6,14,36,88}, {2,8,22,64,181}.\n\n\nLet t(n) denote the number of such sequences of length n.\nYou are given that t(10) = 86195 and t(20) = 5227991891.\n\n\nFind t(1010) and give your answer modulo 109.\n\n\n\n";
const index: number = 319;
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
