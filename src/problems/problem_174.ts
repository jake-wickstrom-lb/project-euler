import { Problem, Strategy } from "../Problem";
const title: string = "Counting the number of \"hollow\" square laminae that can form one, two, three, ... distinct arrangements";
const description: string = "\nWe shall define a square lamina to be a square outline with a square \"hole\" so that the shape possesses vertical and horizontal symmetry.\nGiven eight tiles it is possible to form a lamina in only one way: 3x3 square with a 1x1 hole in the middle. However, using thirty-two tiles it is possible to form two distinct laminae.\n\n\nIf t represents the number of tiles used, we shall say that t = 8 is type L(1) and t = 32 is type L(2).\nLet N(n) be the number of t \u2264 1000000 such that t is type L(n); for example, N(15) = 832.\nWhat is \u2211\u2009N(n) for 1 \u2264 n \u2264 10?\n";
const index: number = 174;
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
