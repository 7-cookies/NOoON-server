import { Router } from "express";
import { userController } from "../controllers";
import { body, validationResult } from 'express-validator';
import auth from "../middlewares/auth";

const router: Router = Router();

// 회원가입 API
router.post('/signup', 
[body('username').notEmpty().withMessage('아이디를 입력해주세요.'), 
body('password').notEmpty().withMessage('비밀번호를 입력해주세요.').
isInt().isLength({min:4, max:4}).withMessage('비밀번호는 숫자 4자리입니다.')],
 userController.signUp);

router.post('/signin', userController.signIn);


export default router;