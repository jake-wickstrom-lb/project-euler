import rp from 'request-promise'

/**
 * Representation of a web page
 */
export class WebPage {
  public domain: string

  protected _request = rp

  constructor(domain: string) {
    this.domain = domain
  }
}
