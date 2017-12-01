const assert = require('assert')
const expect = require('chai').expect
const should = require('chai').should()
const authController = require('../../controllers/auth.controller')

describe('AuthController', () => {
  beforeEach(() => {
    authController.setRoles(['user'])
  })

  describe('isAuthorized', () => {
    it('should return false if not authorized', () => {
      const isAuth = authController.isAuthorized('admin')
      expect(isAuth).to.be.false
    })

    it('should return true if authorized', () => {
      authController.setRoles(['user', 'admin'])
      const isAuth = authController.isAuthorized('admin')
      isAuth.should.be.true
    })

    it('should not allow get if not authorized')
    it('should allow get if authorized')
  })

  describe('isAuthorizedAsync', () => {
    it('Should return false if not authorized', (done) => {
      authController.isAuthorizedAsync(
        'admin',
        (isAuth) => {
          assert.equal(false, isAuth)
          done()
        }
      )
    })
  })
})
