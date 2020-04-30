import { Problem, Strategy } from "../Problem";
const title: string = "Hexadecimal numbers";
const description: string = "\nIn  the hexadecimal number system numbers are represented using 16 different digits:\n0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F\nThe hexadecimal number AF when written in the decimal number system equals 10x16+15=175.\nIn the 3-digit hexadecimal numbers 10A, 1A0, A10, and A01 the digits 0,1 and A are all present.\nLike numbers written in base ten we write hexadecimal numbers without leading zeroes.\nHow many hexadecimal numbers containing at most sixteen hexadecimal digits exist with all of the digits 0,1, and A present at least once?\nGive your answer as a hexadecimal number.\n(A,B,C,D,E and F in upper case, without any leading or trailing code that marks the number as hexadecimal and without leading zeroes , e.g. 1A3F and not: 1a3f and not 0x1a3f and not $1A3F and not #1A3F and not 0000001A3F)\n";
const index: number = 162;
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
