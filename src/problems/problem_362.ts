import { Problem, Strategy } from "../Problem";
const title: string = "Squarefree factors";
const description: string = "\n\nConsider the number 54.\n54 can be factored in 7 distinct ways into one or more factors larger than 1:\n54, 2\u00D727, 3\u00D718, 6\u00D79, 3\u00D73\u00D76, 2\u00D73\u00D79 and 2\u00D73\u00D73\u00D73.\nIf we require that the factors are all squarefree only two ways remain: 3\u00D73\u00D76 and 2\u00D73\u00D73\u00D73.\n\n\nLet's call Fsf(n) the number of ways n can be factored into one or more squarefree factors larger than 1, so\nFsf(54)=2.\n\n\nLet S(n) be \u2211\u2009Fsf(k) for k=2 to n.\n\n\nS(100)=193.\n\n\nFind S(10 000 000 000). \n\n\n\n";
const index: number = 362;
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
