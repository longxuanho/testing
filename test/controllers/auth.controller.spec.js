var assert = require('assert')
var authController = require('../../controllers/auth.controller')

describe('AuthController', () => {

  beforeEach(() => {
    console.log('run beforeEach')
    authController.setRoles(['user'])
  })

  describe('isAuthorized', () => {
    it('Should return false if not authorized', () => {
      assert.equal(false, authController.isAuthorized('admin'))
    })

    it('Should return true if authorized', () => {
      authController.setRoles(['user', 'admin'])
      assert.equal(true, authController.isAuthorized('admin'))
    })
  })

  describe('isAuthorizedAsync', () => {
    it('Should return false if not authorized', function (done) {
      this.timeout(2500)
      authController.isAuthorizedAsync('admin',
        (isAuth) => {
          assert.equal(false, isAuth)
          done()
        })
    })
  })

})
