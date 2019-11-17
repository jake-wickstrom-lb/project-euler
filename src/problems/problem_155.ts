import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Counting Capacitor Circuits";
const description: string = "\nAn electric circuit uses exclusively identical capacitors of the same value C.\n\nThe capacitors can be connected in series or in parallel to form sub-units, which can then be connected in series or in parallel with other capacitors or other sub-units to form larger sub-units, and so on up to a final circuit.\nUsing this simple procedure and up to n identical capacitors, we can make circuits having a range of different total capacitances. For example, using up to n=3 capacitors of 60 F each, we can obtain the following 7 distinct total capacitance values: \n\nIf we denote by D(n) the number of distinct total capacitance values we can obtain when using up to n equal-valued capacitors and the simple procedure described above, we have: D(1)=1, D(2)=3, D(3)=7 ...\nFind D(18).\nReminder : When connecting capacitors C1, C2 etc in parallel, the total capacitance is CT\u00A0=\u00A0C1\u00A0+\u00A0C2\u00A0+...,\n\nwhereas when connecting them in series, the overall capacitance is given by: $\\dfrac{1}{C_T} = \\dfrac{1}{C_1} + \\dfrac{1}{C_2} + ...$\n\n";
const index: number = 155;
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
