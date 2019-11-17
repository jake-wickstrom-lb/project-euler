import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Integer partition equations";
const description: string = "\nFor some positive integers k, there exists an integer partition of the form\u00A0\u00A0 4t = 2t + k,\nwhere 4t, 2t, and k are all positive integers and t is a real number.\n\nThe first two such partitions are 41 = 21 + 2 and 41.5849625... = 21.5849625... + 6.\n\nPartitions where t is also an integer are called perfect. \nFor any m \u2265 1 let P(m) be the proportion of such partitions that are perfect with k \u2264 m.\nThus P(6) = 1/2.\n\nIn the following table are listed some values of P(m)\n\u00A0\u00A0\u00A0P(5) = 1/1\n\u00A0\u00A0\u00A0P(10) = 1/2\n\u00A0\u00A0\u00A0P(15) = 2/3\n\u00A0\u00A0\u00A0P(20) = 1/2\n\u00A0\u00A0\u00A0P(25) = 1/2\n\u00A0\u00A0\u00A0P(30) = 2/5\n\u00A0\u00A0\u00A0...\n\u00A0\u00A0\u00A0P(180) = 1/4\n\u00A0\u00A0\u00A0P(185) = 3/13\n\n\nFind the smallest m for which P(m) < 1/12345\n";
const index: number = 207;
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
