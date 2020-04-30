import { Problem, Strategy } from "../Problem";
const title: string = "Minimal network";
const description: string = "\nThe following undirected network consists of seven vertices and twelve edges with a total weight of 243.\n\n\nThe same network can be represented by the matrix below.\n\u00A0\u00A0\u00A0\u00A0ABCDEFG\nA-161221---\nB16--1720--\nC12--28-31-\nD211728-181923\nE-20-18--11\nF--3119--27\nG---231127-\nHowever, it is possible to optimise the network by removing some edges and still ensure that all points on the network remain connected. The network which achieves the maximum saving is shown below. It has a weight of 93, representing a saving of 243 \u2212 93 = 150 from the original network.\n\n\nUsing network.txt (right click and 'Save Link/Target As...'), a 6K text file containing a network with forty vertices, and given in matrix form, find the maximum saving which can be achieved by removing redundant edges whilst ensuring that the network remains connected.\n\n";
const index: number = 107;
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
