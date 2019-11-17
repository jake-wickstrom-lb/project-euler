import { Problem, Strategy } from '../Problem'
import ProblemManager from '../ProblemManager'

const title: string = 'title'
const description: string = 'description'
const index: number = -1

class Solution extends Strategy {
  public validateArgs(args: any[]) {
    throw new Error("Method not implemented.");
  }

  public solve(args: any[]) {
    throw new Error("Method not implemented.");
  }
}

const solution = new Solution()

const ProblemImplementation = new Problem(title, description, solution)

ProblemManager.register(index, ProblemImplementation)
