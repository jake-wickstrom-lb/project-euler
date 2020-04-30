/**
 * Report detailing the result of a problem computation
 */
interface ProblemReport {
  title: string
  description: string
  arguments: {[index: string]: any}
  solution: number
}

/**
 * Abstract class to represent and solve a single problem
 * @param title       The title of the problem as given on project-euler.net
 * @param description The description of the problem as given on project-euler.net
 */
export class Problem {
  public readonly index: number
  public readonly title: string
  public readonly description: string
  private strategy: Strategy

  public constructor(index: number, title: string, description: string, strategy: Strategy) {
    this.index = index
    this.title = title
    this.description = description
    this.strategy = strategy
  }

  /**
   * Generates a report with the solution to the problem for the given arguments
   * @param  ...args [description]
   * @return         [description]
   */
  public run(...args: any[]): ProblemReport {
    this.strategy.validateArgs(args)
    var solution = this.strategy.solve(args)
    return this.report(solution, args)
  }

  /**
   * Generates a report of the solution to the problem for the given args
   * @param  solution the computed solution to the problem
   * @param  args     the context arguments the solution was computed for
   * @return          a report of the solution to the problem
   */
  protected report(solution: number, args: any[]): ProblemReport {
    return {
      title: this.title,
      description: this.description,
      arguments: [...args],
      solution: solution
    }
  }
}

/**
 * Abstract representation of the solution to a problem
 * @param  args [description]
 * @return      [description]
 */
export abstract class Strategy {
  /**
   * Confirms that the arguments passed to the run function are acceptable for this problem
   * @param  ...args [description]
   * @return         [description]
   */
  public abstract validateArgs(args: any[]): any

  /**
   * Computes the solution to the problem for the given arguments
   * @param  ...args Contextual argumements to solve the problem for
   * @return         [description]
   */
  public abstract solve(args: any[]): any
}
