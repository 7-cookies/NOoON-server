import { Request, Response } from "express"
import { m, sc } from "../constants";
import { userService } from '../services';
import { UserSignUpRequestDto, UserSignInRequestDto } from "../dto/user/userRequestDto";
import { validationResult } from 'express-validator';
import { fail, success } from "../constants/response";
import jwtHandler from "../modules/jwtHandler";
import { UserSignInResponseDto, UserSignUpResponseDto } from "../dto/user/userReponseDto";


// * 회원가입
const signUp = async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, m.BAD_REQUEST));
    }

    const userRequestDto:UserSignUpRequestDto = req.body;

    try {
        const userSignUpResponseDto = await userService.signUp(userRequestDto);

        return res.status(sc.OK).send(success(sc.OK,m.OK, userSignUpResponseDto));
    } catch (error) {
        if (error == 400) {
            return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, m.BAD_REQUEST));
        }
        return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, m.INTERNAL_SERVER_ERROR));
    }
};

//* 로그인
const signIn = async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, m.BAD_REQUEST));
    }
  
    const userSignInDto: UserSignInRequestDto = req.body;

    console.log(userSignInDto);
  
    try {
      const userId = await userService.signIn(userSignInDto);
  
      if (!userId) { return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, m.NOT_FOUND)); }
      else if (userId === sc.UNAUTHORIZED)
        { return res.status(sc.UNAUTHORIZED).send(fail(sc.UNAUTHORIZED, m.INVALID_PASSWORD)); }
  
      const accessToken = jwtHandler.sign(userId);
  
      const userSignInResponseDto: UserSignInResponseDto = {
        id: userId,
        accessToken: accessToken,
      };
  
      res.status(sc.OK).send(success(sc.OK, m.SIGN_IN_SUCCESS, userSignInResponseDto));
    } catch (e) {
      console.log(error);
      //? 서버 내부에서 오류 발생
      res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, m.INTERNAL_SERVER_ERROR));
    }
  };

const userController = {
    signUp,
    signIn
};

export default userController;