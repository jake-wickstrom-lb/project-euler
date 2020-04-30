import { Problem, Strategy } from "../Problem";
const title: string = "Multiples of 3 and 5";
const description: string = "\nIf we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.\nFind the sum of all the multiples of 3 or 5 below 1000.\n";
const index: number = 1
class Solution extends Strategy {
    public validateArgs(args: any[]) {
        // expect a single integer n to find sum of 3/5 multiples below
        return (typeof args[0] === 'number' && args[0] % 1 == 0)
    }
    public solve(args: any[]) {
      // we want to consider all numbers less than the provided arg, so subtract 1
      let x = args[0] - 1

      // the formula for the sum of the first n natural numbers in n(n+1)/2

      // we can adjust this formula to find the sum of multiples of natural numbers as so:
      //
      // x = m*floor(n/m)(floor(n/m)+1)
      //
      // to solve we add the values when m is 3 and 5 and subtract when m is 15 (the LCM of 3 and 5)

      return 1.5 * Math.floor(x/3)*( Math.floor(x/3) + 1 )
             + 2.5 * Math.floor(x/5)*(Math.floor(x/5)+1)
             - 7.5 * Math.floor(x/15)*(Math.floor(x/15)+1)
    }
}
const solution = new Solution();
export const ProblemImplementation = new Problem(index, title, description, solution);
