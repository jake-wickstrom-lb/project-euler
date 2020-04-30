import { Problem, Strategy } from "../Problem";
const title: string = "Binary Circles";
const description: string = "\n2N binary digits can be placed in a circle so that all the N-digit clockwise subsequences are distinct.\n\nFor N=3, two such circular arrangements are possible, ignoring rotations:\n\n\nFor the first arrangement, the 3-digit subsequences, in clockwise order, are: 000, 001, 010, 101, 011, 111, 110 and 100.\n\nEach circular arrangement can be encoded as a number by concatenating the binary digits starting with the subsequence of all zeros as the most significant bits and proceeding clockwise. The two arrangements for N=3 are thus represented as 23 and 29:\n00010111\u20092 = 23\n00011101\u20092 = 29\n\nCalling S(N) the sum of the unique numeric representations, we can see that S(3) = 23 + 29 = 52.\n\nFind S(5).\n\n";
const index: number = 265;
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
