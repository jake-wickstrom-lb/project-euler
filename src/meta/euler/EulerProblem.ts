import $ from "cheerio"

/**
 * Representation of a single problem page
 * @param html [description]
 */
export class EulerProblem {
  private parsed: Cheerio

  constructor(html: string) {
    this.parsed = $(html)
  }

  public get title() {
    return this.parsed.find("#content > h2").text()
  }

  public get description() {
    return this.parsed.find("#content > .problem_content").text()
  }

  public get index() {
    var problem_index = this.parsed.find("#content > #problem_info").text()

    console.log(problem_index)

    var numbers = problem_index.match(/[0-9]+/g)

    if(!numbers || !numbers[0]) {
      throw new Error('Could not find index for this problem')
    }

    return parseInt(numbers[0])
  }
}
