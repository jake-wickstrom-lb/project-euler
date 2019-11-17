import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Eating pie";
const description: string = "\n\nJeff eats a pie in an unusual way.\nThe pie is circular. He starts with slicing an initial cut in the pie along a radius.\nWhile there is at least a given fraction F of pie left, he performs the following procedure:\n- He makes two slices from the pie centre to any point of what is remaining of the pie border, any point on the remaining pie border equally likely. This will divide the remaining pie into three pieces. \n- Going counterclockwise from the initial cut, he takes the first two pie pieces and eats them.\nWhen less than a fraction F of pie remains, he does not repeat this procedure. Instead, he eats all of the remaining pie.\n\n\n\n\n\n\nFor x \u2265 1, let E(x) be the expected number of times Jeff repeats the procedure above with F = 1/x.\nIt can be verified that  E(1) = 1, E(2) \u2248 1.2676536759, and E(7.5) \u2248 2.1215732071.\n\n\nFind E(40) rounded to 10 decimal places behind the decimal point.\n\n\n\n";
const index: number = 394;
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
