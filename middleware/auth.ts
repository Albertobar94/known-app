import jwt from 'next-auth/jwt'

/**
 * Generates a jwt token
 * checks if that was successful
 * asigns req.user the token created.
 * if the token is not created it returns 401
 */
export default async (req, res, next) => {
  const token = await jwt.getToken({ req, secret: process.env.JWT_SECRET })

  if (token) {
    // Signed in
    req.user = token
    next()
  } else {
    // Not Signed in
    res.status(401)
    res.end()
  }
}
