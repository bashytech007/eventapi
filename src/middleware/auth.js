const jwt = require('jsonwebtoken')

const { UnauthenticatedError } = require('../errors')

const authMiddleWare = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('Unauthorized request')
  }

  try {
    const payload = jwt.verify(authHeader.split(' ')[1], process.env.JWTSECRET)

    req.user = { userId: payload._id }

    next()
  } catch (error) {
    throw new UnauthenticatedError('Request Token not valid')
  }
}
module.exports = authMiddleWare
