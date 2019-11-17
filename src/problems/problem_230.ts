import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Fibonacci Words";
const description: string = "\nFor any two strings of digits, A and B, we define FA,B to be the sequence (A,B,AB,BAB,ABBAB,...) in which each term is the concatenation of the previous two.\n\nFurther, we define DA,B(n) to be the nth digit in the first term of FA,B that contains at least n digits.\n\nExample:\n\nLet A=1415926535, B=8979323846. We wish to find DA,B(35), say.\n\nThe first few terms of FA,B are:\n1415926535\n8979323846\n14159265358979323846\n897932384614159265358979323846\n14159265358979323846897932384614159265358979323846\n\nThen DA,B(35) is the 35th digit in the fifth term, which is 9.\n\nNow we use for A the first 100 digits of \u03C0 behind the decimal point:\n14159265358979323846264338327950288419716939937510 \n58209749445923078164062862089986280348253421170679 \n\nand for B the next hundred digits:\n\n82148086513282306647093844609550582231725359408128 \n48111745028410270193852110555964462294895493038196 .\n\nFind \u2211n = 0,1,...,17 \u00A0 10n\u00D7 DA,B((127+19n)\u00D77n) .\n\n\n\n \n\n";
const index: number = 230;
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
