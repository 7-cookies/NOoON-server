import { NextFunction, Request, Response } from 'express';
import { m, sc } from '../constants';
import { fail } from '../constants/response';

const usernameValidator = async (req:Request, res:Response, next:NextFunction) => {
    const { username } = req.body;

    let check = /^(?=.*[a-zA-Z])(?=.*[!@#$%^~*+=-])(?=.*[0-9]).{1,20}$/;
    if ( !check.test(username)) {
        return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, m.SIGN_UP_LIMIT))
    };
    next();
}
export default usernameValidator;