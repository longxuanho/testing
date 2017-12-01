function AuthController() {
  let roles
  function setRoles(role) {
    roles = role
  }

  function isAuthorized(neededRole) {
    return roles.indexOf(neededRole) >= 0
  }

  function isAuthorizedPromise(neededRole) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(roles.indexOf(neededRole) >= 0)
      }, 0)
    })
  }

  return { isAuthorized, isAuthorizedPromise, setRoles }
}

module.exports = AuthController()
