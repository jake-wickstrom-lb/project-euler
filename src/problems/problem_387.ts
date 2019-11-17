import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Harshad Numbers";
const description: string = "\nA Harshad or Niven number is a number that is divisible by the sum of its digits.\n201 is a Harshad number because it is divisible by 3 (the sum of its digits.)\nWhen we truncate the last digit from 201, we get 20, which is a Harshad number.\nWhen we truncate the last digit from 20, we get 2, which is also a Harshad number.\nLet's call a Harshad number that, while recursively truncating the last digit, always results in a Harshad number a right truncatable Harshad number.  \n\nAlso:\n201/3=67 which is prime.\nLet's call a Harshad number that, when divided by the sum of its digits, results in a prime a strong Harshad number.\n\nNow take the number 2011 which is prime.\nWhen we truncate the last digit from it we get 201, a strong Harshad number that is also right truncatable.\nLet's call such primes strong, right truncatable Harshad primes.\n\nYou are given that the sum of the strong, right truncatable Harshad primes less than 10000 is 90619.\n\nFind the sum of the strong, right truncatable Harshad primes less than 1014.\n";
const index: number = 387;
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
