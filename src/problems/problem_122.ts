import { Problem, Strategy } from "../Problem";
const title: string = "Efficient exponentiation";
const description: string = "\nThe most naive way of computing n15 requires fourteen multiplications:\nn \u00D7 n \u00D7 ... \u00D7 n = n15\nBut using a \"binary\" method you can compute it in six multiplications:\nn \u00D7 n = n2n2 \u00D7 n2 = n4n4 \u00D7 n4 = n8n8 \u00D7 n4 = n12n12 \u00D7 n2 = n14n14 \u00D7 n = n15\nHowever it is yet possible to compute it in only five multiplications:\nn \u00D7 n = n2n2 \u00D7 n = n3n3 \u00D7 n3 = n6n6 \u00D7 n6 = n12n12 \u00D7 n3 = n15\nWe shall define m(k) to be the minimum number of multiplications to compute nk; for example m(15) = 5.\nFor 1 \u2264 k \u2264 200, find \u2211 m(k).\n\n";
const index: number = 122;
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
