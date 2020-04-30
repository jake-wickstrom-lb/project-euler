import { Problem, Strategy } from "../Problem";
const title: string = "Cardano Triplets";
const description: string = "\n\nA triplet of positive integers (a,b,c) is called a Cardano Triplet if it satisfies the condition:\n$$\\sqrt[3]{a + b \\sqrt{c}} + \\sqrt[3]{a - b \\sqrt{c}} = 1$$\n\n\nFor example, (2,1,5) is a Cardano Triplet.\n\n\nThere exist 149 Cardano Triplets for which a+b+c \u2264 1000.\n\n\nFind how many Cardano Triplets exist such that a+b+c \u2264 110,000,000.\n \n\n";
const index: number = 251;
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
