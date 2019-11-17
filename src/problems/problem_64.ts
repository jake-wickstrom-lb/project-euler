import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Odd period square roots";
const description: string = "\nAll square roots are periodic when written as continued fractions and can be written in the form:\n\n$\\displaystyle \\quad \\quad \\sqrt{N}=a_0+\\frac 1 {a_1+\\frac 1 {a_2+ \\frac 1 {a3+ \\dots}}}$\n\nFor example, let us consider $\\sqrt{23}:$\n$\\quad \\quad \\sqrt{23}=4+\\sqrt{23}-4=4+\\frac 1 {\\frac 1 {\\sqrt{23}-4}}=4+\\frac 1  {1+\\frac{\\sqrt{23}-3}7}$\n\nIf we continue we would get the following expansion:\n\n$\\displaystyle \\quad \\quad \\sqrt{23}=4+\\frac 1 {1+\\frac 1 {3+ \\frac 1 {1+\\frac 1 {8+ \\dots}}}}$\n\nThe process can be summarised as follows:\n\n$\\quad \\quad a_0=4, \\frac 1 {\\sqrt{23}-4}=\\frac {\\sqrt{23}+4} 7=1+\\frac {\\sqrt{23}-3} 7$\n$\\quad \\quad a_1=1, \\frac 7 {\\sqrt{23}-3}=\\frac {7(\\sqrt{23}+3)} {14}=3+\\frac {\\sqrt{23}-3} 2$\n$\\quad \\quad a_2=3, \\frac 2 {\\sqrt{23}-3}=\\frac {2(\\sqrt{23}+3)} {14}=1+\\frac {\\sqrt{23}-4} 7$\n$\\quad \\quad a_3=1, \\frac 7 {\\sqrt{23}-4}=\\frac {7(\\sqrt{23}+4)} 7=8+\\sqrt{23}-4$\n$\\quad \\quad a_4=8, \\frac 1 {\\sqrt{23}-4}=\\frac {\\sqrt{23}+4} 7=1+\\frac {\\sqrt{23}-3} 7$\n$\\quad \\quad a_5=1, \\frac 7 {\\sqrt{23}-3}=\\frac {7 (\\sqrt{23}+3)} {14}=3+\\frac {\\sqrt{23}-3} 2$\n\n$\\quad \\quad a_6=3, \\frac 2 {\\sqrt{23}-3}=\\frac {2(\\sqrt{23}+3)} {14}=1+\\frac {\\sqrt{23}-4} 7$\n$\\quad \\quad a_7=1, \\frac 7 {\\sqrt{23}-4}=\\frac {7(\\sqrt{23}+4)} {7}=8+\\sqrt{23}-4$\n\n\nIt can be seen that the sequence is repeating. For conciseness, we use the notation $\\sqrt{23}=[4;(1,3,1,8)]$, to indicate that the block (1,3,1,8) repeats indefinitely.\n\nThe first ten continued fraction representations of (irrational) square roots are:\n\n$\\quad \\quad \\sqrt{2}=[1;(2)]$, period=$1$\n$\\quad \\quad \\sqrt{3}=[1;(1,2)]$, period=$2$\n$\\quad \\quad \\sqrt{5}=[2;(4)]$, period=$1$\n$\\quad \\quad \\sqrt{6}=[2;(2,4)]$, period=$2$\n$\\quad \\quad \\sqrt{7}=[2;(1,1,1,4)]$, period=$4$\n$\\quad \\quad \\sqrt{8}=[2;(1,4)]$, period=$2$\n$\\quad \\quad \\sqrt{10}=[3;(6)]$, period=$1$\n$\\quad \\quad \\sqrt{11}=[3;(3,6)]$, period=$2$\n$\\quad \\quad \\sqrt{12}=[3;(2,6)]$, period=$2$\n$\\quad \\quad \\sqrt{13}=[3;(1,1,1,1,6)]$, period=$5$\n\nExactly four continued fractions, for $N \\le 13$, have an odd period.\nHow many continued fractions for $N \\le 10\\,000$ have an odd period?\n\n\n\n\n\n\n";
const index: number = 64;
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
