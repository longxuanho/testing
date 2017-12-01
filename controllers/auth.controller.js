function AuthController() {
  let roles
  let user

  function setUser(inUser) {
    user = inUser
  }

  function setRoles(role) {
    roles = role
    user.roles = role
  }

  function isAuthorized(neededRole) {
    if (user) {
      user.isAuthorized(neededRole)
      return user.isAuthorized(neededRole)
    }
    return false
  }

  function isAuthorizedPromise(neededRole) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(roles.indexOf(neededRole) >= 0)
      }, 0)
    })
  }

  function getIndex(req, res) {
    res.render('index')
  }

  return {
    isAuthorized, isAuthorizedPromise, setRoles, getIndex, setUser,
  }
}

module.exports = AuthController()
