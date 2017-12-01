/* eslint-disable no-unused-expressions */
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)
const { expect } = chai
chai.should()

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

  describe('isAuthorizedPromise', () => {
    it('should return false if not authorized', () => authController.isAuthorizedPromise('admin').should.eventually.be.true)
  })
})
