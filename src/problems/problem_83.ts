import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Path sum: four ways";
const description: string = "\nNOTE: This problem is a significantly more challenging version of Problem 81.\nIn the 5 by 5 matrix below, the minimal path sum from the top left to the bottom right, by moving left, right, up, and down, is indicated in bold red and is equal to 2297.\n\n$$\n\\begin{pmatrix}\n\\color{red}{131} & 673 & \\color{red}{234} & \\color{red}{103} & \\color{red}{18}\\\\\n\\color{red}{201} & \\color{red}{96} & \\color{red}{342} & 965 & \\color{red}{150}\\\\\n630 & 803 & 746 & \\color{red}{422} & \\color{red}{111}\\\\\n537 & 699 & 497 & \\color{red}{121} & 956\\\\\n805 & 732 & 524 & \\color{red}{37} & \\color{red}{331}\n\\end{pmatrix}\n$$\n\nFind the minimal path sum from the top left to the bottom right by moving left, right, up, and down in matrix.txt (right click and \"Save Link/Target As...\"), a 31K text file containing an 80 by 80 matrix.\n";
const index: number = 83;
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
