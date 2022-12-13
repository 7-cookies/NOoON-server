import { Request, Response } from "express"
import { m, sc } from "../constants";
import { userService } from '../services';
import { UserSignUpRequestDto, UserSignInRequestDto } from "../dto/user/userRequestDto";
import { validationResult } from 'express-validator';
import { fail, success } from "../constants/response";
import jwtHandler from "../modules/jwtHandler";
import { UserSignInResponseDto, UserSignUpResponseDto } from "../dto/user/userReponseDto";
import { user } from "@prisma/client";


// * 회원가입
// * request data: username, password
const signUp = async (req: Request, res: Response) => {
    const error = validationResult(req);
    
    // const errorMessage = error.mapped()

    if (!error.isEmpty()) {
      return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, error.array()[0].msg));
    }

    const userRequestDto:UserSignUpRequestDto = req.body;

    console.log(userRequestDto);

    try {
        const userSignUpResponseDto = await userService.signUp(userRequestDto);

        if (userSignUpResponseDto == null) {
          return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, m.USER_EXIST));
        }
        return res.status(sc.OK).send(success(sc.OK,m.OK, userSignUpResponseDto));
    } catch (error) {
        if (error == sc.BAD_REQUEST) {
            return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, m.BAD_REQUEST));
        }
        return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, m.INTERNAL_SERVER_ERROR));
    }
};

//* 로그인
//* request data: username, password
const signIn = async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, m.BAD_REQUEST));
    }
  
    const userSignInDto: UserSignInRequestDto = req.body;
  
    try {
        const data = await userService.signIn(userSignInDto) as any;

        const userId:any = data.userId;
        const hasPlace:any = data.hasPlace;

      if (!userId) { return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, m.NOT_FOUND)); }
      else if (userId === sc.UNAUTHORIZED)
        { return res.status(sc.UNAUTHORIZED).send(fail(sc.UNAUTHORIZED, m.INVALID_PASSWORD)); }

      // * Token 생성
      const accessToken = jwtHandler.sign(userId);
      
      // * Response DTO
      const userSignInResponseDto= {
        id: userId,
        accessToken: accessToken,
        hasPlace: hasPlace
      };
  
      res.status(sc.OK).send(success(sc.OK, m.SIGN_IN_SUCCESS, userSignInResponseDto));
    } catch (e) {
      console.log(error);
      res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, m.INTERNAL_SERVER_ERROR));
    }
  };

const userController = {
    signUp,
    signIn
};

export default userController;