import { Problem, Strategy } from "../Problem";
const title: string = "Path sum: two ways";
const description: string = "\nIn the 5 by 5 matrix below, the minimal path sum from the top left to the bottom right, by only moving to the right and down, is indicated in bold red and is equal to 2427.\n\n$$\n\\begin{pmatrix}\n\\color{red}{131} & 673 & 234 & 103 & 18\\\\\n\\color{red}{201} & \\color{red}{96} & \\color{red}{342} & 965 & 150\\\\\n630 & 803 & \\color{red}{746} & \\color{red}{422} & 111\\\\\n537 & 699 & 497 & \\color{red}{121} & 956\\\\\n805 & 732 & 524 & \\color{red}{37} & \\color{red}{331}\n\\end{pmatrix}\n$$\n\nFind the minimal path sum from the top left to the bottom right by only moving right and down in matrix.txt (right click and \"Save Link/Target As...\"), a 31K text file containing an 80 by 80 matrix.\n";
const index: number = 81;
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
