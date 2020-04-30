import { Problem, Strategy } from "../Problem";
const title: string = "Stone Game II";
const description: string = "\n\nA game is played with two piles of stones and two players. At her turn, a player removes a number of stones from the larger pile. The number of stones she removes must be a positive multiple of the number of stones in the smaller pile.\n\n\n\nE.g., let the ordered pair(6,14) describe a configuration with 6 stones in the smaller pile and 14 stones in the larger pile, then the first player can remove 6 or 12 stones from the larger pile.\n\n\n\nThe player taking all the stones from a pile wins the game.\n\n\n\nA winning configuration is one where the first player can force a win. For example, (1,5), (2,6) and (3,12) are winning configurations because the first player can immediately remove all stones in the second pile.\n\n\n\nA losing configuration is one where the second player can force a win, no matter what the first player does. For example, (2,3) and (3,4) are losing configurations: any legal move leaves a winning configuration for the second player.\n\n\n\nDefine S(N) as the sum of (xi+yi) for all losing configurations (xi,yi), 0 < xi < yi \u2264 N. We can verify that S(10) = 211 and S(104) = 230312207313.\n\n\n\nFind S(1016) mod 710.\n\n";
const index: number = 325;
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
