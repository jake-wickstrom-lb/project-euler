/**
 * Manager class to provide access to functions for each
 */

import { Problem } from "./Problem"

class MissingSolutionError extends Error {
  constructor(message?: string) {
    super(message)
    Object.setPrototypeOf(this, new.target.prototype)
    this.name = 'MissingSolutionError'
  }
}

class ProblemManager {
  private problems:{[index:number]: Problem} = {}

  /**
   * Register a new problem solution to the problem manager
   * @param  index    The reference number of the problem that has been solved (on project euler)
   * @param  callback function to call
   * @return          [description]
   */
  public register(problem: Problem) {
    this.problems[problem.index] = problem
  }

  public run(index: number, ...args: any[]) {
    if(!this.problems[index]) {
      throw new MissingSolutionError()
    }
    return this.problems[index].run(...args)
  }
}

// -------------------------------------------------------------------- //

import { ProblemImplementation as p1 } from './problems/problem_1'

const manager = new ProblemManager()

manager.register(p1)

export default manager
