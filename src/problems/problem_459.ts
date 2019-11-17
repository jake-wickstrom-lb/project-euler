import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Flipping game";
const description: string = "\nThe flipping game is a two player game played on a N by N square board.\nEach square contains a disk with one side white and one side black.\nThe game starts with all disks showing their white side.\n\nA turn consists of flipping all disks in a rectangle with the following properties:\nthe upper right corner of the rectangle contains a white disk\nthe rectangle width is a perfect square (1, 4, 9, 16, ...)\nthe rectangle height is a triangular number (1, 3, 6, 10, ...)\n\n\n\nPlayers alternate turns. A player wins by turning the grid all black.\n\nLet W(N) be the number of winning moves for the first player on a N by N board with all disks white, assuming perfect play.\nW(1) = 1, W(2) = 0, W(5) = 8 and W(102) = 31395.\n\nFor N=5, the first player's eight winning first moves are:\n\n\n\nFind W(106).\n\n";
const index: number = 459;
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
