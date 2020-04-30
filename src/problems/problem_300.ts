import { Problem, Strategy } from "../Problem";
const title: string = "Protein folding";
const description: string = "\nIn a very simplified form, we can consider proteins as strings consisting of hydrophobic (H) and polar (P) elements, e.g. HHPPHHHPHHPH. \nFor this problem, the orientation of a protein is important; e.g. HPP is considered distinct from PPH. Thus, there are 2n distinct proteins consisting of n elements.\n\nWhen one encounters these strings in nature, they are always folded in such a way that the number of H-H contact points is as large as possible, since this is energetically advantageous.\nAs a result, the H-elements tend to accumulate in the inner part, with the P-elements on the outside.\nNatural proteins are folded in three dimensions of course, but we will only consider protein folding in two dimensions.\n\nThe figure below shows two possible ways that our example protein could be folded (H-H contact points are shown with red dots).\n\n\n\nThe folding on the left has only six H-H contact points, thus it would never occur naturally.\nOn the other hand, the folding on the right has nine H-H contact points, which is optimal for this string.\n\nAssuming that H and P elements are equally likely to occur in any position along the string, the average number of H-H contact points in an optimal folding of a random protein string of length 8 turns out to be 850\u00A0/\u00A028=3.3203125.\n\nWhat is the average number of H-H contact points in an optimal folding of a random protein string of length 15?\nGive your answer using as many decimal places as necessary for an exact result.\n";
const index: number = 300;
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
