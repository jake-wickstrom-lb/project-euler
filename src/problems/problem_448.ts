import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Average least common multiple";
const description: string = "\n\nThe function lcm(a,b) denotes the least common multiple of a and b.\nLet A(n) be the average of the values of lcm(n,i) for 1\u2264i\u2264n.\nE.g: A(2)=(2+2)/2=2 and A(10)=(10+10+30+20+10+30+70+40+90+10)/10=32. \n\nLet S(n)=\u2211\u2009A(k) for 1\u2264k\u2264n.\nS(100)=122726.\n\n\nFind S(99999999019) mod 999999017.\n\n";
const index: number = 448;
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
