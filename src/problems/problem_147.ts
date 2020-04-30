import { Problem, Strategy } from "../Problem";
const title: string = "Rectangles in cross-hatched grids";
const description: string = "\nIn a 3x2 cross-hatched grid, a total of 37 different rectangles could be situated within that grid as indicated in the sketch.\n\nThere are 5 grids smaller than 3x2, vertical and horizontal dimensions being important, i.e. 1x1, 2x1, 3x1, 1x2 and 2x2. If each of them is cross-hatched, the following number of different rectangles could be situated within those smaller grids:\n\n1x11\n2x14\n3x18\n1x24\n2x218\n\n\nAdding those to the 37 of the 3x2 grid, a total of 72 different rectangles could be situated within 3x2 and smaller grids.\n\nHow many different rectangles could be situated within 47x43 and smaller grids?\n";
const index: number = 147;
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
