import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "A rectangular tiling";
const description: string = "\n\nWe wish to tile a rectangle whose length is twice its width.\nLet T(0) be the tiling consisting of a single rectangle.\nFor n > 0, let T(n) be obtained from T(n-1) by replacing all tiles in the following manner:\n\n\n\n\n\n\nThe following animation demonstrates the tilings T(n) for n from 0 to 5:\n\n\n\n\n\n\nLet f(n) be the number of points where four tiles meet in T(n).\nFor example, f(1) = 0, f(4) = 82 and f(109) mod 177 = 126897180.\n\n\n\nFind f(10k) for k = 1018, give your answer modulo 177.\n\n";
const index: number = 405;
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
