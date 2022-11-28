import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { m, sc } from "../constants";
import config from "../config";
import { fail, success } from "../constants/response";
import tokenType from "../constants/tokenType";
import jwtHandler from "../modules/jwtHandler";

const auth = async (req:Request, res:Response, next:NextFunction) => {
    
    const token = req.header('authorization');

    //  토큰 유무 검증
    if (!token) {
        return res.status(sc.UNAUTHORIZED).send(fail(sc.UNAUTHORIZED, m.NO_TOKEN));
    }

    try {
        const decoded = jwtHandler.verify(token);

        if (decoded === tokenType.TOKEN_EXPIRED) {
            // 토큰 만료시에 실행됨/
            return res.status(sc.UNAUTHORIZED).send(fail(sc.UNAUTHORIZED, m.TOKEN_EXPIRED));
        }

        if (decoded === tokenType.TOKEN_INVALID) {
            return res.status(sc.UNAUTHORIZED).send(fail(sc.UNAUTHORIZED, m.TOKEN_INVALID));
        }
        req.body.user = (decoded as any).user;

        next(); // 미들웨어 실행이 끝나면 다음으로 넘기기

    } catch (error: any) {
        if (error.name === 'TokenExpiredError') {
            // 토큰 만료시에 실행되는 함수
            return res.status(sc.UNAUTHORIZED).send(fail(sc.UNAUTHORIZED, m.TOKEN_EXPIRED));
        }
        res.status(sc.UNAUTHORIZED).send(fail(sc.UNAUTHORIZED, m.TOKEN_INVALID));        
    }
};

export default auth;