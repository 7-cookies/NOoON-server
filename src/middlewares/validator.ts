import { NextFunction, Request, Response } from 'express';
import { m, sc } from '../constants';
import { fail } from '../constants/response';

const usernameValidator = async (req:Request, res:Response, next:NextFunction) => {
    const { username } = req.body;

    const pattern = /[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]/; // 특수문자
    const patternKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크
    const patternSpace = /\s/g;

    if (patternSpace.test(username)) {
        return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, m.SIGN_UP_LIMIT))
    }

    if (!pattern.test(username)) {
        return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, m.SIGN_UP_LIMIT))
    }

    if (patternKor.test(username)) {
        return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, m.SIGN_UP_LIMIT))
    }

    if (!(username.length >= 1 && username.length <= 20)) {
        return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, m.SIGN_UP_LIMIT))

    }

    next()

}
export default usernameValidator;