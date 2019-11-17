import $ from "cheerio"

import { WebPage } from "../Webpage";
import { EulerProblem } from "./EulerProblem";

const URL = 'https://projecteuler.net'

/**
 * Provided an abstraction of the project euler webpage
 */
export class EulerSite extends WebPage {
  public constructor() {
    super(URL)
  }

  public async getProblem(problem: number): Promise<EulerProblem> {
    var html = await this._request(URL + `/problem=${problem}`)
    return new EulerProblem(html)
  }

  public async getHighestArchivedProblemNumber() {
    var html = await this._request(URL + `/archives`)
    var recentDesc = $(html).find('#problems_table_page > p').first().text()
    var numbers = recentDesc.match(/[0-9]+/g)

    if(!numbers || !numbers[1]) {
      throw new Error('Could not find highest problem number in archive')
    }

    return parseInt(numbers[1])
  }
}
