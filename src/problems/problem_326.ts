import { Problem, Strategy } from "../Problem";
const title: string = "Modulo Summations";
const description: string = "\n\nLet $a_n$ be a sequence recursively defined by:$\\quad a_1=1,\\quad\\displaystyle a_n=\\biggl(\\sum_{k=1}^{n-1}k\\cdot a_k\\biggr)\\bmod n$.\n\n\nSo the first 10 elements of $a_n$ are: 1,1,0,3,0,3,5,4,1,9.\n\nLet f(N,M) represent the number of pairs (p,q) such that: \n\n$$\n\\def\\htmltext#1{\\style{font-family:inherit;}{\\text{#1}}}\n1\\le p\\le q\\le N \\quad\\htmltext{and}\\quad\\biggl(\\sum_{i=p}^qa_i\\biggr)\\bmod M=0\n$$\n\n\nIt can be seen that f(10,10)=4 with the pairs (3,3), (5,5), (7,9) and (9,10).\n\n\nYou are also given that f(104,103)=97158.\n\nFind f(1012,106).\n\n\n\n\n \n\n\n\n";
const index: number = 326;
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
