import {Router}  from  'express';
import * as userController  from '../controllers/user.controller.js'
import {body} from 'express-validator'
const router = Router();

router.post('/register',
    // body('email').isEmail().withMessage('email must be valid email address'),
    // body('password').isLength({min:3}).withMessage('password must be at least 3 character')
    userController.createUserController)

export default router;