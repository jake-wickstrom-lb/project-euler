import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Primes with runs";
const description: string = "\nConsidering 4-digit primes containing repeated digits it is clear that they cannot all be the same: 1111 is divisible by 11, 2222 is divisible by 22, and so on. But there are nine 4-digit primes containing three ones:\n1117, 1151, 1171, 1181, 1511, 1811, 2111, 4111, 8111\nWe shall say that M(n, d) represents the maximum number of repeated digits for an n-digit prime where d is the repeated digit, N(n, d) represents the number of such primes, and S(n, d) represents the sum of these primes.\nSo M(4, 1) = 3 is the maximum number of repeated digits for a 4-digit prime where one is the repeated digit, there are N(4, 1) = 9 such primes, and the sum of these primes is S(4, 1) = 22275. It turns out that for d = 0, it is only possible to have M(4, 0) = 2 repeated digits, but there are N(4, 0) = 13 such cases.\nIn the same way we obtain the following results for 4-digit primes.\n\nDigit, d\nM(4, d)\nN(4, d)\nS(4, d)\n0\n2\n13\n67061\n1\n3\n9\n22275\n2\n3\n1\n2221\n3\n3\n12\n46214\n4\n3\n2\n8888\n5\n3\n1\n5557\n6\n3\n1\n6661\n7\n3\n9\n57863\n8\n3\n1\n8887\n9\n3\n7\n48073\n\nFor d = 0 to 9, the sum of all S(4, d) is 273700.\nFind the sum of all S(10, d).\n\n";
const index: number = 111;
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
