import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Special isosceles triangles";
const description: string = "\nConsider the isosceles triangle with base length, $b = 16$, and legs, $L = 17$.\n\n\nBy using the Pythagorean theorem it can be seen that the height of the triangle, $h = \\sqrt{17^2 - 8^2} = 15$, which is one less than the base length.\nWith $b = 272$ and $L = 305$, we get $h = 273$, which is one more than the base length, and this is the second smallest isosceles triangle with the property that $h = b \\pm 1$.\nFind $\\sum L$ for the twelve smallest isosceles triangles for which $h = b \\pm 1$ and $b$, $L$ are positive integers.\n\n";
const index: number = 138;
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
