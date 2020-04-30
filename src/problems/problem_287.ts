import { Problem, Strategy } from "../Problem";
const title: string = "Quadtree encoding (a simple compression algorithm)";
const description: string = "\nThe quadtree encoding allows us to describe a 2N\u00D72N  black and white image as a sequence of bits (0 and 1). Those sequences are to be read from left to right like this:\nthe first bit deals with the complete 2N\u00D72N region;\n\"0\" denotes a split:\nthe current 2n\u00D72n region is divided into 4 sub-regions of dimension 2n-1\u00D72n-1,\nthe next bits contains the description of the top left, top right, bottom left and bottom right sub-regions - in that order;\n\"10\" indicates that the current region contains only black pixels;\n\"11\" indicates that the current region contains only white pixels.Consider the following 4\u00D74 image (colored marks denote places where a split can occur):\n\nThis image can be described by several sequences, for example :\n\"001010101001011111011010101010\", of length 30, or\n\"0100101111101110\", of length 16, which is the minimal sequence for this image.\n\nFor a positive integer N, define DN as the 2N\u00D72N image with the following coloring scheme:\nthe pixel with coordinates x\u2009=\u20090, y\u2009=\u20090 corresponds to the bottom left pixel,\nif (x\u2009-\u20092N-1)2\u2009+\u2009(y\u2009-\u20092N-1)2\u2009\u2264\u200922N-2 then the pixel is black,\notherwise the pixel is white.What is the length of the minimal sequence describing D24\u2009?\n";
const index: number = 287;
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
