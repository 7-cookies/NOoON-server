import { Router } from "express";
import { userController } from "../controllers";
import { body, validationResult } from 'express-validator';
import auth from "../middlewares/auth";

const router: Router = Router();

// 회원가입 API
router.post('/signup', 
[body('username').notEmpty(), 
body('password').isInt().isLength({min:4, max:4})],
 userController.signUp);

router.post('/signin', auth, userController.signIn);

export default router;