const should = require('chai').should()

describe('Basic Mocha Test', () => {
  it('should deal with objects', () => {
    const objA = { name: 'John', gender: 'male' }
    const objB = { name: 'John', gender: 'male' }

    objA.should.deep.equal(objB)
  })
  it('should allow testing with nulls', () => {
    const iAmNull = null
    should.not.exist(iAmNull)
  })
})
