import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Fractions involving the number of different ways a number can be expressed as a sum of powers of 2";
const description: string = "\nDefine f(0)=1 and f(n) to be the number of ways to write n as a sum of powers of 2 where no power occurs more than twice. \n\nFor example, f(10)=5 since there are five different ways to express 10:10 = 8+2 = 8+1+1 = 4+4+2 = 4+2+2+1+1 = 4+4+1+1\n\nIt can be shown that for every fraction p/q (p>0, q>0) there exists at least one integer n such that f(n)/f(n-1)=p/q.\nFor instance, the smallest n for which f(n)/f(n-1)=13/17 is 241.\nThe binary expansion of 241 is 11110001.\nReading this binary number from the most significant bit to the least significant bit there are 4 one's, 3 zeroes and 1 one. We shall call the string 4,3,1 the Shortened Binary Expansion of 241.\nFind the Shortened Binary Expansion of the smallest n for which f(n)/f(n-1)=123456789/987654321.\nGive your answer as comma separated integers, without any whitespaces.\n";
const index: number = 175;
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
