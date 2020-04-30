import { Problem, Strategy } from "../Problem";
const title: string = "Balanced Sculptures";
const description: string = "\nLet us define a balanced sculpture of order n as follows:\nA polyomino made up of n+1 tiles known as the blocks (n tiles) and the plinth (remaining tile);\nthe plinth has its centre at position (x\u2009=\u20090, y\u2009=\u20090);\nthe blocks have y-coordinates greater than zero (so the plinth is the unique lowest tile);\nthe centre of mass of all the blocks, combined, has x-coordinate equal to zero.\nWhen counting the sculptures, any arrangements which are simply reflections about the y-axis, are not counted as distinct. For example, the 18 balanced sculptures of order 6 are shown below; note that each pair of mirror images (about the y-axis) is counted as one sculpture:\n\n\nThere are 964 balanced sculptures of order 10 and 360505 of order 15.How many balanced sculptures are there of order 18?\n\n";
const index: number = 275;
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
