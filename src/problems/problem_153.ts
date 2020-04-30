import { Problem, Strategy } from "../Problem";
const title: string = "Investigating Gaussian Integers";
const description: string = "\nAs we all know the equation x2=-1 has no solutions for real x.\n\nIf we however introduce the imaginary number i this equation has two solutions: x=i and x=-i.\n\nIf we go a step further the equation (x-3)2=-4 has two complex solutions: x=3+2i and x=3-2i.\nx=3+2i and x=3-2i are called each others' complex conjugate.\n\nNumbers of the form a+bi are called complex numbers.\n\nIn general a+bi and a\u2212bi are each other's complex conjugate.\nA Gaussian Integer is a complex number a+bi such that both a and b are integers.\n\nThe regular integers are also Gaussian integers (with b=0).\n\nTo distinguish them from Gaussian integers with b \u2260 0 we call such integers \"rational integers.\"\n\nA Gaussian integer is called a divisor of a rational integer n if the result is also a Gaussian integer.\n\nIf for example we divide 5 by 1+2i we can simplify $\\dfrac{5}{1 + 2i}$ in the following manner:\n\nMultiply numerator and denominator by the complex conjugate of 1+2i: 1\u22122i.\n\nThe result is $\\dfrac{5}{1 + 2i} = \\dfrac{5}{1 + 2i}\\dfrac{1 - 2i}{1 - 2i} = \\dfrac{5(1 - 2i)}{1 - (2i)^2} = \\dfrac{5(1 - 2i)}{1 - (-4)} = \\dfrac{5(1 - 2i)}{5} = 1 - 2i$.\n\nSo 1+2i is a divisor of 5.\n\nNote that 1+i is not a divisor of 5 because $\\dfrac{5}{1 + i} = \\dfrac{5}{2} - \\dfrac{5}{2}i$.\n\nNote also that if the Gaussian Integer (a+bi) is a divisor of a rational integer n, then its complex conjugate (a\u2212bi) is also a divisor of n.\nIn fact, 5 has six divisors such that the real part is positive: {1, 1 + 2i, 1 \u2212 2i, 2 + i, 2 \u2212 i, 5}.\n\nThe following is a table of all of the divisors for the first five positive rational integers:\n\nn Gaussian integer divisors\nwith positive real partSum s(n) of these\n\ndivisors111\n21, 1+i, 1-i, 25\n31, 34\n41, 1+i, 1-i, 2, 2+2i, 2-2i,413\n51, 1+2i, 1-2i, 2+i, 2-i, 512\nFor divisors with positive real parts, then, we have: $\\sum \\limits_{n = 1}^{5} {s(n)} = 35$.\nFor $\\sum \\limits_{n = 1}^{10^5} {s(n)} = 17924657155$.\nWhat is $\\sum \\limits_{n = 1}^{10^8} {s(n)}$?\n";
const index: number = 153;
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
