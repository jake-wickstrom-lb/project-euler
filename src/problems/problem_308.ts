import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "An amazing Prime-generating Automaton";
const description: string = "\nA program written in the programming language Fractran consists of a list of fractions.\n\nThe internal state of the Fractran Virtual Machine is a positive integer, which is initially set to a seed value. Each iteration of a Fractran program multiplies the state integer by the first fraction in the list which will leave it an integer.\n\nFor example, one of the Fractran programs that John Horton Conway wrote for prime-generation consists of the following 14 fractions:1791\n,\n7885\n,\n1951\n,\n2338\n,\n2933\n,\n7729\n,\n9523\n,\n7719\n,\n117\n,\n1113\n,\n1311\n,\n152\n,\n17\n,\n551\n.\nStarting with the seed integer 2, successive iterations of the program produce the sequence:\n15, 825, 725, 1925, 2275, 425, ..., 68, 4, 30, ..., 136, 8, 60, ..., 544, 32, 240, ...\n\nThe powers of 2 that appear in this sequence are 22, 23, 25, ...\nIt can be shown that all the powers of 2 in this sequence have prime exponents and that all the primes appear as exponents of powers of 2, in proper order!\n\nIf someone uses the above Fractran program to solve Project Euler Problem 7 (find the 10001st prime), how many iterations would be needed until the program produces 210001st prime ?\n";
const index: number = 308;
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
