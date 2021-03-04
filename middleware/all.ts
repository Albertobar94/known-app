import nc from 'next-connect'
import db from './db'
import auth from './auth'

/**
 * Middleware from Next
 */
const middleware = nc()

/**
 * Merging db and auth middlewares 
 */
middleware.use(db).use(auth)
export default middleware
