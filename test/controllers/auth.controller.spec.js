/* eslint-disable no-unused-expressions */
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const sinon = require('sinon')

chai.use(chaiAsPromised)
const { expect } = chai
chai.should()

const authController = require('../../controllers/auth.controller')


describe('AuthController', () => {
  describe.only('isAuthorized', () => {
    let user = {}
    beforeEach(() => {
      user = {
        roles: ['user'],
        isAuthorized(neededRole) {
          return this.roles.indexOf(neededRole) >= 0
        },
      }
      sinon.spy(user, 'isAuthorized')
      authController.setUser(user)
    })

    it('should return false if not authorized', () => {
      const isAuth = authController.isAuthorized('admin')
      user.isAuthorized.calledOnce.should.be.true
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
    it('should return false if not authorized', () => authController.isAuthorizedPromise('admin').should.eventually.be.false)
  })

  describe('getIndex', () => {
    it('should render index', () => {
      const req = {}
      const res = {
        render: sinon.spy(),
      }

      authController.getIndex(req, res)
      res.render.calledOnce.should.be.true
      res.render.calledWithMatch('index').should.be.true
    })
  })
})
