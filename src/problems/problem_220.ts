import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Heighway Dragon";
const description: string = "\nLet D0 be the two-letter string \"Fa\".  For n\u22651, derive Dn from Dn-1 by the string-rewriting rules:\n\n\"a\" \u2192 \"aRbFR\"\n\"b\" \u2192 \"LFaLb\"\n\nThus, D0 = \"Fa\", D1 = \"FaRbFR\", D2 = \"FaRbFRRLFaLbFR\", and so on.\n\nThese strings can be interpreted as instructions to a computer graphics program, with \"F\" meaning \"draw forward one unit\", \"L\" meaning \"turn left 90 degrees\", \"R\" meaning \"turn right 90 degrees\", and \"a\" and \"b\" being ignored.  The initial position of the computer cursor is (0,0), pointing up towards (0,1).\n\nThen Dn is an exotic drawing known as the Heighway Dragon of order n.  For example, D10 is shown below; counting each \"F\" as one step, the highlighted spot at (18,16) is the position reached after 500 steps.\n\n\n\n\nWhat is the position of the cursor after 1012 steps in D50 ?\nGive your answer in the form x,y with no spaces.\n\n";
const index: number = 220;
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
