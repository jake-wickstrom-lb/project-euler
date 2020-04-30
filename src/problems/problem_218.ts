import { Problem, Strategy } from "../Problem";
const title: string = "Perfect right-angled triangles";
const description: string = "\nConsider the right angled triangle with sides a=7, b=24 and c=25.\nThe area of this triangle is 84, which is divisible by the perfect numbers 6 and 28.\nMoreover it is a primitive right angled triangle as gcd(a,b)=1 and gcd(b,c)=1.\nAlso c is a perfect square.\n\nWe will call a right angled triangle perfect if\n-it is a primitive right angled triangle\n-its hypotenuse is a perfect square\n\nWe will call a right angled triangle super-perfect if\n-it is a perfect right angled triangle and\n-its area is a multiple of the perfect numbers 6 and 28.\n\n\nHow many perfect right-angled triangles with c\u22641016 exist that are not super-perfect?\n\n";
const index: number = 218;
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
