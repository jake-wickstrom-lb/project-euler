import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Cyclic numbers";
const description: string = "\nA cyclic number with n digits has a very interesting property:\nWhen it is multiplied by 1, 2, 3, 4, ... n, all the products have exactly the same digits, in the same order, but rotated in a circular fashion!\n\n\n\nThe smallest cyclic number is the 6-digit number 142857 :\n142857 \u00D7 1 = 142857\n142857 \u00D7 2 = 285714\n142857 \u00D7 3 = 428571\n142857 \u00D7 4 = 571428\n142857 \u00D7 5 = 714285\n142857 \u00D7 6 = 857142  \n\n\n\nThe next cyclic number is 0588235294117647 with 16 digits :\n0588235294117647 \u00D7 1 = 0588235294117647\n0588235294117647 \u00D7 2 = 1176470588235294\n0588235294117647 \u00D7 3 = 1764705882352941\n...\n0588235294117647 \u00D7 16 = 9411764705882352\n\n\n\nNote that for cyclic numbers, leading zeros are important.\n\n\n\nThere is only one cyclic number for which, the eleven leftmost digits are 00000000137 and the five rightmost digits are 56789 (i.e., it has the form 00000000137...56789 with an unknown number of digits in the middle). Find the sum of all its digits.\n\n\n";
const index: number = 358;
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
