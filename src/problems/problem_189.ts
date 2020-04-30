import { Problem, Strategy } from "../Problem";
const title: string = "Tri-colouring a triangular grid";
const description: string = "\nConsider the following configuration of 64 triangles:\n\n\n\nWe wish to colour the interior of each triangle with one of three colours: red, green or blue, so that no two neighbouring triangles have the same colour. Such a colouring shall be called valid. Here, two triangles are said to be neighbouring if they share an edge.\nNote: if they only share a vertex, then they are not neighbours. \n\nFor example, here is a valid colouring of the above grid:\n\n\nA colouring C' which is obtained from a colouring C by rotation or reflection is considered distinct from C unless the two are identical.\n\nHow many distinct valid colourings are there for the above configuration?\n\n";
const index: number = 189;
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
