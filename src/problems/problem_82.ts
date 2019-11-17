import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Path sum: three ways";
const description: string = "\nNOTE: This problem is a more challenging version of Problem 81.\nThe minimal path sum in the 5 by 5 matrix below, by starting in any cell in the left column and finishing in any cell in the right column, and only moving up, down, and right, is indicated in red and bold; the sum is equal to 994.\n\n$$\n\\begin{pmatrix}\n131 & 673 & \\color{red}{234} & \\color{red}{103} & \\color{red}{18}\\\\\n\\color{red}{201} & \\color{red}{96} & \\color{red}{342} & 965 & 150\\\\\n630 & 803 & 746 & 422 & 111\\\\\n537 & 699 & 497 & 121 & 956\\\\\n805 & 732 & 524 & 37 & 331\n\\end{pmatrix}\n$$\n\nFind the minimal path sum from the left column to the right column in matrix.txt (right click and \"Save Link/Target As...\"), a 31K text file containing an 80 by 80 matrix.\n";
const index: number = 82;
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
