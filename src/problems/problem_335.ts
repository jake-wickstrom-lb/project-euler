import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Gathering the beans";
const description: string = "\nWhenever Peter feels bored, he places some bowls, containing one bean each, in a circle. After this, he takes all the beans out of a certain bowl and drops them one by one in the bowls going clockwise. He repeats this, starting from the bowl he dropped the last bean in, until the initial situation appears again. For example with 5 bowls he acts as follows:\n\n\n\nSo with 5 bowls it takes Peter 15 moves to return to the initial situation.\n\nLet M(x) represent the number of moves required to return to the initial situation, starting with x bowls. Thus, M(5) = 15. It can also be verified that M(100) = 10920.\n\nFind M(2k+1). Give your answer modulo 79.\n\n\n";
const index: number = 335;
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
