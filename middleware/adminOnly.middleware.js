import { USER_ROLES } from '../constants.js'
import errorResponse from '../utils/errorResponse.js'

export const adminOnly = (req, res, next) => {

    if(req.user.role !== USER_ROLES.ADMIN)
        return  errorResponse(res, 403, 'Access denied', 'ACCESS_DENIED');

    next();
}