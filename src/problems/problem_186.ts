import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Connectedness of a network";
const description: string = "\nHere are the records from a busy telephone system with one million users:\n\nRecNrCallerCalled\n120000710005326001835004393600863701497.........\nThe telephone number of the caller and the called number in record n are Caller(n) = S2n-1 and Called(n) = S2n where S1,2,3,... come from the \"Lagged Fibonacci Generator\":\n\nFor 1 \u2264 k \u2264 55, Sk = [100003 - 200003k + 300007k3] (modulo 1000000)\nFor 56 \u2264 k, Sk = [Sk-24 + Sk-55] (modulo 1000000)\n\nIf Caller(n) = Called(n) then the user is assumed to have misdialled and the call fails; otherwise the call is successful.\n\nFrom the start of the records, we say that any pair of users X and Y are friends if X calls Y or vice-versa. Similarly, X is a friend of a friend of Z if X is a friend of Y and Y is a friend of Z; and so on for longer chains.\n\nThe Prime Minister's phone number is 524287. After how many successful calls, not counting misdials, will 99% of the users (including the PM) be a friend, or a friend of a friend etc., of the Prime Minister?\n\n";
const index: number = 186;
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
