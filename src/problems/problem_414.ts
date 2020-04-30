import { Problem, Strategy } from "../Problem";
const title: string = "Kaprekar constant";
const description: string = "\n\n6174 is a remarkable number; if we sort its digits in increasing order and subtract that number from the number you get when you sort the digits in decreasing order, we get 7641-1467=6174.\nEven more remarkable is that if we start from any 4 digit number and repeat this process of sorting and subtracting, we'll eventually end up with 6174 or immediately with 0 if all digits are equal. \nThis also works with numbers that have less than 4 digits if we pad the number with leading zeroes until we have 4 digits.\nE.g. let's start with the number 0837:\n8730-0378=8352\n8532-2358=6174\n\n\n6174 is called the Kaprekar constant. The process of sorting and subtracting and repeating this until either 0 or the Kaprekar constant is reached is called the Kaprekar routine.\n\n\nWe can consider the Kaprekar routine for other bases and number of digits. \nUnfortunately, it is not guaranteed a Kaprekar constant exists in all cases; either the routine can end up in a cycle for some input numbers or the constant the routine arrives at can be different for different input numbers.\nHowever, it can be shown that for 5 digits and a base b = 6t+3\u22609, a Kaprekar constant exists.\nE.g. base 15: (10,4,14,9,5)15\nbase 21: (14,6,20,13,7)21\n\nDefine Cb to be the Kaprekar constant in base b for 5 digits.\nDefine the function sb(i) to be\n 0 if i = Cb or if i written in base b consists of 5 identical digits\n the number of iterations it takes the Kaprekar routine in base b to arrive at Cb, otherwise\n\nNote that we can define sb(i) for all integers i < b5. If i written in base b takes less than 5 digits, the number is padded with leading zero digits until we have 5 digits before applying the Kaprekar routine.\n\n\nDefine S(b) as the sum of sb(i) for 0 < i < b5.\nE.g. S(15) = 5274369 \nS(111) = 400668930299\n\n\nFind the sum of S(6k+3) for 2 \u2264 k \u2264 300.\nGive the last 18 digits as your answer.\n\n\n";
const index: number = 414;
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
