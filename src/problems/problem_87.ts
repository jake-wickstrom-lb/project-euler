import { Problem, Strategy } from "../Problem";
const title: string = "Prime power triples";
const description: string = "\n\nThe smallest number expressible as the sum of a prime square, prime cube, and prime fourth power is 28. In fact, there are exactly four numbers below fifty that can be expressed in such a way:\n28 = 22 + 23 + 24\n33 = 32 + 23 + 24\n49 = 52 + 23 + 24\n47 = 22 + 33 + 24\nHow many numbers below fifty million can be expressed as the sum of a prime square, prime cube, and prime fourth power?\n\n";
const index: number = 87;
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
