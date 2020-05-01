import { Problem, Strategy } from "../Problem";
const title: string = "Largest prime factor";
const description: string = "\nThe prime factors of 13195 are 5, 7, 13 and 29.\nWhat is the largest prime factor of the number 600851475143 ?\n\n\n";
const index: number = 3;
class Solution extends Strategy {
    public validateArgs(args: any[]) {
        return ( args[0] && args[0] % 1 == 0 )
    }
    public solve(args: any[]) {
        // If we find all of the prime factors of a number, we will certainly find the largest one

        // Note that this is not the most efficient method

        // Let's start by finding the smallest prime factors and work up

        // We will choose to ignore the case where we try to find the prime factorization for a
        // number less than 1


        let num = args[0]
        let largest_factor = 1

        // Two is the smallest prime factor, so we will begin there

        while(num % 2 == 0) {
          num = num / 2
          largest_factor = 2
        }

        let bound = Math.sqrt(num)

        // then we consider all odd numbers up until the square root of the number
        // no non-prime numbers will be recorded as factors as they will already have been broken
        // down into their prime factorizations
        for (let i = 3; i <= bound; i += 2) {
          while( num % i == 0 ) {
            num = num / i
            largest_factor = i
          }
        }

        return largest_factor
    }
}
const solution = new Solution();
export const ProblemImplementation = new Problem(index, title, description, solution);

/*
    ADDITIONAL COMMENTS

    Upon further thought and research, I found that there are much better ways to find the largest
    factor of a number

    Here is an idea for a better (athough much more complex) method of finding the largest prime

    1. Choose a way to find factors of a number (Pollards Rho, Quadratic Sieve)
    2. Set up a priority queue with the original number at the root.
    3. Factor the largest number in the priority queue and add it's factors back to the priority queue
    4. Repeat until the largest number has no factors, and hence is prime

    This algorithm was suggested originally at https://stackoverflow.com/a/242189
 */
