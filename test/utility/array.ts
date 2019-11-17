import { expect } from 'chai'

import { integerArray } from '../../lib/utility/array'


describe('integer array tests', function() {
  it('should create an array of the correct length', function() {
    expect(integerArray(0,5)).to.have.lengthOf(5)
  })

  it('should create an empty array when the length is zero', function() {
    expect(integerArray(0,0)).to.have.lengthOf(0)
  })

  it('should throw an error when length is negative', function() {
    expect(function() { integerArray(0, -1) } ).to.throw()
  })

  it('should start at the given number', function() {
    expect(integerArray(0,1)[0]).to.be.equal(0)
    expect(integerArray(1,1)[0]).to.be.equal(1)
    expect(integerArray(-1,1)[0]).to.be.equal(-1)
    expect(integerArray(0,10)[0]).to.be.equal(0)
  })
})
