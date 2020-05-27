import { Problem, Strategy } from "../Problem";
const title: string = "Largest palindrome product";
const description: string = "\n\nA palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 \u00D7 99.\nFind the largest palindrome made from the product of two 3-digit numbers.\n\n";
const index: number = 4;
class Solution extends Strategy {
    /**
     * @param  args First element is an integer, indicating the number of digits in x, y where x*y = largest palindrome
     */
    public validateArgs(args: any[]) {
        return ( args[0] && args[0] % 1 == 0 )
    }

    public solve(args: any[]) {
      // trying something a bit creative here. The obvious solution is a nested for loop which tests
      // n digit integers until it finds two which have a palendrome products

      // I thought it would be interesting to instead test palendrome's until one is found that has
      // 3 digit factors

      // The nested for loop will run in O(log(n)*n^2) [nested for loop is O(n^2), and testing a palendrome
      // is O(m) where m is the number of digits in n^2 or log(n^2) ~= log(n)].

      // The palendrome factorization approach will on average be slower (number of palendromes go
      // like 10^n) [https://codereview.stackexchange.com/questions/146288/calculate-the-number-of-palindrome-numbers-in-the-given-ranges]

      // If we assume that the largest palendrome with an n digit factor is close to 10^(2n), it is
      // entirely possible that this algorithm will run faster. My brain hurts just thinking about
      // trying to prove this, so I will probably just benchmark the two solutions and see how things
      // go

      // the largest palendrome possible is all 9's, and is 2n - 1 digits long
      let largestPalendrome = Math.pow(10, 2*args[0]) - 1
      let smallestPalendrome = Math.pow(10, 2*args[0] - 1) + 1

      let testPalendrome = largestPalendrome

      while(testPalendrome >= smallestPalendrome) {
        if(this.hasNDigitFactorPair(testPalendrome, args[0])) {
          return testPalendrome
        }
        testPalendrome = this.findPreviousPalendrome(testPalendrome)
      }

        return -1
    }

    /**
     * Finds the largest palendrome that is less than n
     * @param  n a palendrome number
     * @return   the largest palendrome that is strictly less than n
     */
    private findPreviousPalendrome(n: number) {
      // If the previous number is a palendrome, we decrement the innermost digit(s) to find the
      // next smallest palendrome

      // If the innermost digit(s) are zero(s), we instead change them to 9's and decrement the next
      // 'layer' of digits

      let palendrome = n.toString().split("")

      let mid = (palendrome.length - 1) / 2

      let i = Math.floor(mid)
      let j = Math.ceil(mid)

      return parseInt(this.shiftPalendromeDigits(palendrome, i, j).join(""))
    }

    // Recursive helper function to perform the shifting of digits which finds the previous palendrome
    private shiftPalendromeDigits(n: string[], i: number, j: number): string[] {
      if (n[i] == '0') {

        n[i] = '9'
        n[j] = '9'
        return this.shiftPalendromeDigits(n, i-1, j+1)

      } else if (n[i] == '1' && i == 0) {

        n = n.slice(1, n.length - 1)
        n.push("9")
        return n

      } else {

        n[i] = (parseInt(n[i]) - 1).toString()
        if(i != j) {
          n[j] = (parseInt(n[j]) - 1).toString()
        }
        return n

      }
    }

    // Helper function to determine if a number has an n digit factor pair
    private hasNDigitFactorPair(num: number, digits: number) {

      let min = Math.pow(10, digits - 1)
      let max = Math.pow(10, digits) - 1

      let sqrt = Math.sqrt(num)
      let sqrt_floor = Math.floor(sqrt)

      if(sqrt < min || sqrt > max) return false

      // number is a perfect square within range
      if(sqrt == sqrt_floor) return true

      let dir = max - sqrt < sqrt - min ? 1 : -1

      for(let i = sqrt_floor; i <= max && i >= min; i += dir) {
        if(num % i == 0) {
          return true
        }
      }

      return false
    }
}
const solution = new Solution();
export const ProblemImplementation = new Problem(index, title, description, solution);
