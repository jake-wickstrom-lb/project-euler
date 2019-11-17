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
  public register(index: number, problem: Problem) {
    this.problems[index] = problem
  }

  public run(index: number, ...args: any[]) {
    if(!this.problems[index]) {
      throw new MissingSolutionError()
    }
    this.problems[index].run(...args)
  }
}

export default new ProblemManager()
