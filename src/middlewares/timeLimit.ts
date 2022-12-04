import { NextFunction, Request, Response } from 'express';
import { m, sc } from '../constants';
import { fail } from '../constants/response';

const timeLimit = async (req:Request, res:Response, next:NextFunction) => {
    const curr = new Date();
    const openTime = new Date('2022-12-25');

    const utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);
    console.log(utc);
    const openUtc = openTime.getTime() + (openTime.getTimezoneOffset() * 60 * 1000);

    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;

    const krCurr = new Date(utc + (KR_TIME_DIFF));
    
    const krOpenTime = new Date(openUtc + (KR_TIME_DIFF));

    console.log(curr)
    console.log(krCurr)
    console.log(krOpenTime)

        if (krCurr < krOpenTime) {
            return res.status(sc.FORBIDDEN).send(fail(sc.FORBIDDEN, m.GET_SNOWMAN_TIME_LIMIT))
        }
        next();
    }

export default timeLimit;