import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "RSA encryption";
const description: string = "\nThe RSA encryption is based on the following procedure:\nGenerate two distinct primes p and q.Compute n=pq and \u03C6=(p-1)(q-1).\nFind an integer e, 1<e<\u03C6, such that gcd(e,\u03C6)=1.\nA message in this system is a number in the interval [0,n-1].\nA text to be encrypted is then somehow converted to messages (numbers in the interval [0,n-1]).\nTo encrypt the text,  for each message, m, c=me mod n is calculated.\nTo decrypt the text, the following procedure is needed: calculate d such that ed=1 mod \u03C6, then for each encrypted message, c, calculate m=cd mod n.\nThere exist values of e and m  such that me mod n=m.We call messages m for which me mod n=m unconcealed messages.\nAn issue when choosing e is that there should not be too many unconcealed messages.  For instance, let p=19 and q=37.\nThen n=19*37=703 and \u03C6=18*36=648.\nIf we choose e=181, then, although gcd(181,648)=1 it turns out that all possible messagesm (0\u2264m\u2264n-1) are unconcealed when calculating me mod n.\nFor any valid choice of e there exist some unconcealed messages.\nIt's important that the number of unconcealed messages is at a minimum.\nChoose p=1009 and q=3643.\nFind the sum of all values of e, 1<e<\u03C6(1009,3643) and gcd(e,\u03C6)=1, so that the number of unconcealed messages for this value of e is at a minimum.\n";
const index: number = 182;
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
