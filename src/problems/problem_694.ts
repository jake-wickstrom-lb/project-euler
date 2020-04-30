import { Problem, Strategy } from "../Problem";
const title: string = "Cube-full Divisors";
const description: string = "\n\nA positive integer $n$ is considered cube-full, if for every prime $p$ that divides $n$, so does $p^3$. Note that $1$ is considered cube-full.\n\n\nLet $s(n)$ be the function that counts the number of cube-full divisors of $n$. For example, $1$, $8$ and $16$ are the three cube-full divisors of $16$. Therefore, $s(16)=3$.\n\n\nLet $S(n)$ represent the summatory function of $s(n)$, that is $S(n)=\\displaystyle\\sum_{i=1}^n s(i)$.\n\n\nYou are given $S(16) =  19$, $S(100) = 126$ and $S(10000) = 13344$.\n\n\nFind $S(10^{18})$.\n\n";
const index: number = 694;
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
