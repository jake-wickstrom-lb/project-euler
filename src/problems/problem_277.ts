import { Problem, Strategy } from "../Problem";
const title: string = "A Modified Collatz sequence";
const description: string = "\n\nA modified Collatz sequence of integers is obtained from a starting value $a_1$ in the following way:\n\n$a_{n+1} = \\, \\,\\, \\frac {a_n} 3 \\quad$ if $a_n$ is divisible by $3$. We shall denote this as a large downward step, \"D\".\n\n$a_{n+1} = \\frac {4 a_n+2} 3 \\, \\,$ if $a_n$ divided by $3$ gives a remainder of $1$. We shall denote this as an upward step, \"U\".\n\n\n$a_{n+1} = \\frac {2 a_n -1} 3 \\, \\,$ if $a_n$ divided by $3$ gives a remainder of $2$. We shall denote this as a small downward step, \"d\".\n\n\n\n\nThe sequence terminates when some $a_n = 1$.\n\n\nGiven any integer, we can list out the sequence of steps.\nFor instance if $a_1=231$, then the sequence $\\{a_n\\}=\\{231,77,51,17,11,7,10,14,9,3,1\\}$ corresponds to the steps \"DdDddUUdDD\".\n\n\nOf course, there are other sequences that begin with that same sequence \"DdDddUUdDD....\".\nFor instance, if $a_1=1004064$, then the sequence is DdDddUUdDDDdUDUUUdDdUUDDDUdDD.\nIn fact, $1004064$ is the smallest possible $a_1 > 10^6$ that begins with the sequence DdDddUUdDD.\n\n\nWhat is the smallest $a_1 > 10^{15}$ that begins with the sequence \"UDDDUdddDDUDDddDdDddDDUDDdUUDd\"?\n\n\n\n\n\n\n\n\n\n\n";
const index: number = 277;
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
