import { USER_ROLES} from '../constants.js'

export const recruiterOnly = (req, res, next) => {

    if(req.user.role !== USER_ROLES.RECRUITER)
        return res.status(403).json({
            success: false,
            message: 'Access denied.'
        })

    next();
}