import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "The Mouse on the Moon";
const description: string = "\n\nThe moon has been opened up, and land can be obtained for free, but there is a catch. You have to build a wall around the land that you stake out, and building a wall on the moon is expensive. Every country has been allotted a 500 m by 500 m square area, but they will possess only that area which they wall in. 251001 posts have been placed in a rectangular grid with 1 meter spacing. The wall must be a closed series of straight lines, each line running from post to post.\n\n\nThe bigger countries of course have built a 2000 m wall enclosing the entire 250 000 m2 area. The Duchy of Grand Fenwick, has a tighter budget, and has asked you (their Royal Programmer) to compute what shape would get best maximum enclosed-area/wall-length ratio.\n\n\nYou have done some preliminary calculations on a sheet of paper.\nFor a 2000 meter wall enclosing the 250 000 m2 area the\nenclosed-area/wall-length ratio is 125.\nAlthough not allowed , but to get an idea if this is anything better:  if you place a circle inside the square area touching the four sides the area will be equal to \u03C0*2502 m2 and the perimeter will be \u03C0*500 m, so the enclosed-area/wall-length ratio will also be 125.\n\n\nHowever, if you cut off from the square four triangles with sides 75 m, 75 m and 75\u221A2 m the total area becomes 238750 m2 and the perimeter becomes 1400+300\u221A2 m. So this gives an enclosed-area/wall-length ratio of 130.87, which is significantly better.\n\n\n\nFind the maximum enclosed-area/wall-length ratio.\nGive your answer rounded to 8 places behind the decimal point in the form abc.defghijk.\n\n\n\n\n";
const index: number = 314;
class Solution extends Strategy {
    public validateArgs(args: any[]) {
        throw new Error("Method not implemented.");
    }
    public solve(args: any[]) {
        throw new Error("Method not implemented.");
    }
}
const solution = new Solution();
const ProblemImplementation = new Problem(title, description, solution);
ProblemManager.register(index, ProblemImplementation);
